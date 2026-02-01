"use client";

import React, { useState, useRef, useEffect } from "react";

const OtpVerification = ({ onVerify, onResend }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(30);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (index, value) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto-advance
        if (value && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const data = e.clipboardData.getData("text").slice(0, 4).split("");
        const newOtp = [...otp];
        data.forEach((char, i) => {
            if (!isNaN(char)) {
                newOtp[i] = char;
            }
        });
        setOtp(newOtp);

        // Focus last or next empty
        const lastIndex = Math.min(data.length, 3);
        inputRefs[lastIndex].current.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const code = otp.join("");
        if (code.length < 4) return;

        setLoading(true);
        // Simulate API call
        if (onVerify) {
            await onVerify(code);
        } else {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("OTP Verified:", code);
        }
        setLoading(false);
    };

    const handleResend = () => {
        if (timer === 0) {
            setTimer(30);
            if (onResend) onResend();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4">
            <div className="glass w-full max-w-md p-8 rounded-[40px] shadow-2xl space-y-8 relative overflow-hidden bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/5">
                {/* Decorative elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-primary opacity-20 blur-3xl rounded-full animate-aurora"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-secondary opacity-20 blur-3xl rounded-full animate-aurora"></div>

                <div className="text-center space-y-2 relative z-10">
                    <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase italic leading-none">
                        VERIFY<span className="text-accent-primary">OTP</span>
                    </h1>
                    <p className="text-foreground/60 text-[10px] font-black uppercase tracking-widest">
                        We've sent a 4-digit code to your terminal.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="flex justify-center gap-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={inputRefs[index]}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                className="w-16 h-18 text-center text-4xl font-black bg-white/10 dark:bg-black/20 border border-foreground/5 rounded-2xl focus:border-accent-primary/50 focus:ring-4 focus:ring-accent-primary/10 transition-all outline-none text-foreground"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={otp.join("").length < 4 || loading}
                        className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${otp.join("").length === 4
                            ? "bg-foreground dark:bg-accent-primary shadow-lg shadow-accent-primary/20"
                            : "bg-foreground/10 text-foreground/20 cursor-not-allowed"
                            }`}
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            "Access Terminal"
                        )}
                    </button>
                </form>

                <div className="text-center relative z-10">
                    <button
                        onClick={handleResend}
                        disabled={timer > 0}
                        className={`text-[10px] font-black uppercase tracking-widest transition-colors ${timer > 0
                            ? "text-foreground/40 cursor-not-allowed"
                            : "text-accent-primary hover:text-accent-primary/80 underline underline-offset-8"
                            }`}
                    >
                        {timer > 0 ? `Resend Signal in ${timer}s` : "Resend Code"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
