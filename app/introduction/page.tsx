"use client";

import Link from "next/link";

export default function IntroductionPage() {
    return (
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-accent-primary/30">

            {/* Background Aurora */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="aurora-blob w-[500px] h-[500px] bg-accent-secondary/10 top-[-5%] right-[-5%] animate-aurora" />
                <div className="aurora-blob w-[400px] h-[400px] bg-accent-primary/5 bottom-[10%] left-[-5%] animate-aurora [animation-delay:-8s]" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                {/* Header */}
                <div className="max-w-3xl mb-24">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-accent-primary/20 text-accent-primary text-[10px] font-black uppercase tracking-[0.4em]">
                        The Protocol
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-8 leading-[0.9]">
                        <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/40">SYSTEM</span><br />
                        <span className="text-accent-primary">INTRODUCTION</span>
                    </h1>
                    <p className="text-foreground/60 text-lg md:text-xl font-medium leading-relaxed">
                        Welcome to the next generation of academic testing. Our system is engineered for peak performance, providing a clinical simulation of the JEE environment.
                    </p>
                </div>

                {/* Grid Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Marking Scheme Glass Card */}
                    <div className="p-10 rounded-[40px] glass border-foreground/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 blur-[50px] rounded-full group-hover:bg-accent-primary/20 transition-all" />

                        <h3 className="text-3xl font-black uppercase italic italic mb-8 tracking-tight">Marking Protocol</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5">
                                <span className="text-foreground/60 font-bold uppercase tracking-widest text-xs">Correct Response</span>
                                <span className="text-2xl font-black text-accent-primary tracking-tighter">+4.0</span>
                            </div>
                            <div className="flex items-center justify-between p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                                <span className="text-red-500/60 font-bold uppercase tracking-widest text-xs">Incorrect Response</span>
                                <span className="text-2xl font-black text-red-500 tracking-tighter">-1.0</span>
                            </div>
                            <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5">
                                <span className="text-foreground/60 font-bold uppercase tracking-widest text-xs">Unattempted</span>
                                <span className="text-2xl font-black text-foreground/40 tracking-tighter">0.0</span>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tip Card */}
                    <div className="flex flex-col justify-between p-10 rounded-[40px] bg-foreground text-background">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-accent-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-black uppercase italic mb-6 leading-tight">Elite Accuracy over Volume</h3>
                            <p className="text-background/70 text-lg font-medium leading-relaxed mb-8">
                                In the JEE ecosystem, precision is your greatest weapon. Negative marking penalizes guesswork. High-ranking candidates often prioritize quality of response over quantity.
                            </p>
                        </div>
                        <Link href="/" className="inline-flex items-center gap-3 text-accent-primary font-black uppercase tracking-widest text-sm group">
                            Return to Hub
                            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Footer Features */}
                <div className="mt-32 pt-24 border-t border-foreground/5">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { t: "Latency Free", d: "Sub-millisecond response times during input cycles." },
                            { t: "Advanced Stats", d: "Probabilistic matching and performance forecasting." },
                            { t: "Global Bench", d: "See how you stack against the top 0.01%." }
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="text-accent-primary font-black uppercase tracking-widest text-xs mb-4">Phase {i + 1}</div>
                                <h4 className="text-xl font-black uppercase italic mb-2 tracking-tight">{item.t}</h4>
                                <p className="text-foreground/60 font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
