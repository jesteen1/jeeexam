"use client";

import Link from "next/link";

export default function ExamPage() {
    return (
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-accent-primary/30">
            {/* Animated Aurora Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="aurora-blob w-[500px] h-[500px] bg-accent-primary/10 top-[-5%] left-[-5%] animate-aurora" />
                <div className="aurora-blob w-[400px] h-[400px] bg-accent-secondary/10 bottom-[10%] right-[-5%] animate-aurora [animation-delay:-8s]" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-accent-primary/20 text-accent-primary text-[10px] font-black uppercase tracking-[0.4em]">
                        Student Terminal
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-4 leading-[0.9]">
                        <span className="text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/40">EXAM</span><br />
                        <span className="text-accent-primary">CONTROL PORTAL</span>
                    </h1>
                    <p className="max-w-xl text-foreground/60 text-lg font-medium leading-relaxed">
                        Access your test materials, analyze performance data, and initiate new examination cycles from this interface.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Test Start Card */}
                    <div className="group relative p-8 rounded-[40px] glass border-foreground/5 hover:border-accent-primary/40 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 blur-[50px] rounded-full group-hover:bg-accent-primary/30 transition-all" />
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-accent-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                                <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase italic mb-4">Active Tests</h3>
                            <p className="text-foreground/60 font-medium mb-8 grow">
                                Join the active JEE Main 2026 simulation. Real-time timer, official pattern, and immediate evaluation.
                            </p>
                            <Link href="/test/start" className="inline-flex items-center justify-center w-full py-4 bg-accent-primary text-background font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform">
                                START TEST NOW
                            </Link>
                        </div>
                    </div>

                    {/* Question Papers Card */}
                    <div className="group relative p-8 rounded-[40px] glass border-foreground/5 hover:border-accent-secondary/40 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/10 blur-[50px] rounded-full group-hover:bg-accent-secondary/30 transition-all" />
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-accent-secondary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                                <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase italic mb-4">Question Papers</h3>
                            <p className="text-foreground/60 font-medium mb-8 grow">
                                Download previous year papers and curated mock sets for offline practice.
                            </p>
                            <Link href="/papers" className="inline-flex items-center justify-center w-full py-4 border border-accent-secondary/20 text-accent-secondary font-black uppercase tracking-widest rounded-2xl hover:bg-accent-secondary/10 transition-colors">
                                ACCESS PAPERS
                            </Link>
                        </div>
                    </div>

                    {/* Results Card */}
                    <div className="group relative p-8 rounded-[40px] glass border-foreground/5 hover:border-indigo-400/40 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full group-hover:bg-indigo-500/30 transition-all" />
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                                <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase italic mb-4">Student Marks</h3>
                            <p className="text-foreground/60 font-medium mb-8 grow">
                                Comprehensive analysis of your test scores. Track percentile growth and subject-wise accuracy.
                            </p>
                            <Link href="/results" className="inline-flex items-center justify-center w-full py-4 border border-indigo-500/20 text-indigo-400 font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500/10 transition-colors">
                                VIEW ANALYTICS
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Status Info */}
                <div className="mt-20 p-8 rounded-[30px] bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border-2 border-accent-primary border-t-transparent animate-spin" />
                        <div>
                            <div className="text-xs font-black uppercase tracking-widest text-accent-primary">System Status</div>
                            <div className="text-xl font-bold">Portal Live - Waiting for user input</div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 rounded-xl bg-background/10 text-xs font-black uppercase tracking-widest">v2.0.4-Stable</div>
                        <div className="px-4 py-2 rounded-xl bg-background/10 text-xs font-black uppercase tracking-widest">No Active Latency</div>
                    </div>
                </div>
            </main>

            {/* Decorative Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] z-0" />
        </div>
    );
}
