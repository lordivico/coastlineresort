# Coastline Resort 🏝️

A premium, high-fidelity resort booking website demo built with Next.js 15, Tailwind CSS, and Framer Motion. This project showcases modern web development capabilities tailored for luxury businesses, featuring an integrated AI Concierge, artistic design implementation, and business-centric functionality.

## ✨ Features

### 🎨 Artistic & Premium Design
- **Immersive Visuals**: Parallax scrolling, glassmorphism effects, and a global noise texture for a filmic feel.
- **Micro-interactions**: Smooth page transitions and hover effects using `framer-motion`.
- **Responsive Layouts**: Fully responsive design that works seamlessly across mobile, tablet, and desktop.
- **Custom Typography**: Editorial-style typography using a blend of serif and sans-serif fonts.
- **Masonry Gallery**: An artistic photo gallery with lightbox functionality.

### 🤖 Intelligent AI Concierge
- **Context-Aware**: The AI assistant reads the visible page content to provide accurate, context-specific answers.
- **Luxury Persona**: Tuned with a specific specific prompt to act as a polite, knowledgeable resort concierge.
- **Powered by Gemini 2.0**: utilizes Google's `gemini-2.0-flash-exp` via OpenRouter for fast and intelligent responses.

### 💼 Business Capabilities
- **SEO Optimized**: Fully integrated JSON-LD Structured Data (Schema.org) for Hotels/Resorts.
- **Promotional Tools**: Dismissible promo banner with animations and promo code logic in the booking engine.
- **Conversion Focused**: Clear calls-to-action (CTAs) and a streamlined booking flow.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI Integration**: OpenRouter API
- **Deployment**: Vercel ready

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/lordivico/coastlineresort.git
   cd coastline-resort
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add your OpenRouter API key:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
src/
├── app/              # App Router pages and API routes
│   ├── api/chat/     # Backend route for AI Concierge
│   ├── gallery/      # Gallery page
│   ├── rooms/        # Rooms listing and dynamic details
│   └── ...
├── components/       # Reusable React components
│   ├── layout/       # Navbar, Footer, PromoBanner
│   ├── ui/           # Buttons, Cards, AIAssistant
│   └── seo/          # Schema markup components
├── data/             # Mock JSON data (rooms, gallery, etc.)
└── lib/              # Utility functions
```

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
