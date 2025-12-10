import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.OPENROUTER_API_KEY;

        console.log("[API] Checking implementation...");
        console.log("[API] Key configured:", !!apiKey);
        if (apiKey) console.log("[API] Key length:", apiKey.length);

        if (!apiKey || apiKey === "your_key_here") {
            console.error("[API] Error: OPENROUTER_API_KEY is missing or default");
            return NextResponse.json(
                { error: "Server Configuration Error: API Key missing. Please check .env.local" },
                { status: 500 }
            );
        }

        const { messages, pageContent } = await req.json();

        const headers: Record<string, string> = {
            "Authorization": `Bearer ${apiKey}`,
            "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            "X-Title": "Coastline Resort",
            "Content-Type": "application/json"
        };

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: "openai/gpt-oss-20b:free",
                messages: [
                    {
                        role: "system",
                        content: `
You are **Coastline AI Concierge**, the intelligent virtual assistant of *Coastline Resort*, a premium beachfront destination.

Your role:
- Provide fast, accurate, and welcoming responses.
- Answer questions about rooms, villas, amenities, spa services, dining, activities, policies, and booking details.
- Keep responses elegant, modern, and under 3 sentences unless the user requests more detail.
- Never invent unrealistic features. If information isn’t provided, answer using general luxury-resort standards.
- Avoid giving exact prices unless provided; instead say “rates vary by season” or “starting from premium pricing.”
- Encourage guests to explore the Rooms, Amenities, or Booking page when needed.
- Tone: helpful, warm, concise, professional, and trustworthy.

Your goal is to make browsing the resort feel effortless and premium.
                        `.trim()
                    },
                    {
                        role: "system",
                        content: "PAGE_CONTENT:\n" + (pageContent || "No page content detected.")
                    },
                    ...messages
                ],
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("[OpenRouter] API Error Response:", errorText);
            console.error("[OpenRouter] Status:", response.status);

            try {
                const errorJson = JSON.parse(errorText);
                return NextResponse.json(errorJson, { status: response.status });
            } catch {
                return NextResponse.json({ error: errorText }, { status: response.status });
            }
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error("[Internal] Server Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
