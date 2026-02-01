"use client";
import { useState, useEffect } from "react";

export default function Loading() {
    const [showExit, setShowExit] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowExit(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-black/95 backdrop-blur-3xl transition-opacity duration-1000">
            {/* Cinematic Pulse Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full delay-700 animate-pulse" />
            </div>

            {/* Spider-Sense Lines (SVG) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <div
                        key={angle}
                        className="absolute top-1/2 left-1/2 w-1.5 h-12 bg-linear-to-t from-red-600 to-transparent rounded-full origin-bottom opacity-0 animate-[spiderSense_2s_infinite]"
                        style={{
                            transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-40px)`,
                            animationDelay: `${angle * 0.05}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Central Glitch Logo */}
                <div className="relative w-24 h-24 mb-12 group">
                    <div className="absolute inset-0 bg-red-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
                    <div className="relative w-full h-full bg-linear-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center font-black text-white text-4xl shadow-2xl -skew-x-12 hover:skew-x-0 transition-transform duration-500">
                        S
                    </div>
                    {/* Glitch Overlay */}
                    <div className="absolute -inset-1 bg-blue-600/30 rounded-2xl animate-pulse blur-sm -z-10 mix-blend-screen" />
                </div>

                {/* Loading Text with Glitch Effect */}
                <div className="text-center">
                    <h2 className="text-2xl font-black uppercase italic tracking-[0.5em] text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Syncing <span className="text-red-600 animate-pulse">Multiverse</span>
                    </h2>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-1 w-48 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 w-1/2 animate-[loadingBar_2s_infinite_ease-in-out]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fallback Exit Button - Only appears if loading is stuck */}
            {showExit && (
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute bottom-24 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 animate-bounce"
                >
                    Proceed Anyway
                </button>
            )}

            {/* Spider-Flix Tech Signature */}
            <div className="absolute bottom-10 flex items-center gap-4 opacity-30">
                <div className="h-px w-12 bg-red-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    Protocol: Series TO play
                </span>
                <div className="h-px w-12 bg-red-600" />
            </div>

            <style jsx global>{`
        @keyframes spiderSense {
          0% { opacity: 0; transform: translate(-50%, -100%) rotate(var(--rotation)) translateY(-40px) scaleY(0.5); }
          50% { opacity: 1; transform: translate(-50%, -100%) rotate(var(--rotation)) translateY(-60px) scaleY(1.2); }
          100% { opacity: 0; transform: translate(-50%, -100%) rotate(var(--rotation)) translateY(-70px) scaleY(0.5); }
        }
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </div>
    );
}
