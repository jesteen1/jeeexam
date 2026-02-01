"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Transmission received! We'll get back to you soon.");
    };

    return (
        <div className="relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden selection:bg-red-500/30 transition-colors duration-300">
            {/* Background Cinematic Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600/10 blur-[130px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10 dark:opacity-20 invert dark:invert-0" />
            </div>

            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                <div className="w-full max-w-2xl">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-lg animate-pulse">
                            Contact Support
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-6">
                            GET IN <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-blue-700 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">TOUCH</span>
                        </h1>
                        <p className="text-gray-600 dark:text-zinc-400 text-lg font-medium tracking-wide leading-relaxed">
                            Have a question about your exam or need technical assistance? Our support team is here to help.
                        </p>
                    </div>

                    {/* Contact Form - Glassmorphism */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative bg-gray-50 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group"
                    >
                        {/* Form Glow Effect */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition-all duration-700" />

                        <div className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="support@onlineexamier.com"
                                        className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 ml-1">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="How can we assist you today?"
                                    className="w-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="group/btn relative w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] active:scale-[0.98]"
                            >
                                <span className="relative z-10 font-black">Send Enquiry</span>
                                <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 origin-bottom" />
                            </button>
                        </div>
                    </form>

                    {/* Contact Details/Socials */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-red-500/20 transition-colors group">
                            <span className="block text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 mb-2 group-hover:animate-pulse">Location</span>
                            <p className="text-gray-600 dark:text-zinc-400 text-sm">Online Campus</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-red-500/20 transition-colors group">
                            <span className="block text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 mb-2 group-hover:animate-pulse">Support</span>
                            <p className="text-gray-600 dark:text-zinc-400 text-sm">support@onlineexamier.com</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-red-500/20 transition-colors group">
                            <span className="block text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 mb-2 group-hover:animate-pulse">Social</span>
                            <p className="text-gray-600 dark:text-zinc-400 text-sm">@onlineexamier</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Noise effect */}
            <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        </div>
    );
}
