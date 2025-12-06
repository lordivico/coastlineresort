"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hello! I'm your concierge. How may I assist you with your stay today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Capture current page content for context-aware answers
            const pageContent = document.body.innerText;

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
                    pageContent // Send page context to backend
                })
            });

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            const aiMessage: Message = {
                role: "assistant",
                content: data.choices?.[0]?.message?.content || "I apologize, I am momentarily unavailable. Please try again."
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            setMessages(prev => [...prev, { role: "assistant", content: "I'm having trouble connecting. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 bg-primary text-secondary p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-colors"
                >
                    <MessageCircle className="h-8 w-8" />
                </motion.button>
            )}

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-card border border-muted/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center text-secondary">
                            <div className="flex items-center gap-3">
                                <div className="bg-secondary/20 p-2 rounded-full">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-display font-medium">Concierge AI</h3>
                                    <p className="text-xs opacity-70">Always here to help</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/5" ref={scrollRef}>
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user"
                                            ? "bg-primary text-white rounded-br-none"
                                            : "bg-white border border-muted/20 text-foreground rounded-bl-none shadow-sm"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-muted/20 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce delay-75" />
                                        <span className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-background border-t">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about rooms, dining..."
                                    className="w-full pl-4 pr-12 py-3 rounded-xl border bg-muted/10 focus:ring-1 focus:ring-primary focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-2 p-2 bg-secondary text-primary rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
