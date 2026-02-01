"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";


const links = [
    { name: "Home", href: "/" },
    { name: "Introduction", href: "/introduction" },
    { name: "Exam", href: "/Exam" },
    { name: "Feedback", href: "/contact" },
    { name: "About Us", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const [mail, Setmail] = useState("");
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const router = useRouter();

    const handleLogout = async() => {
        const formdata=new FormData()
        formdata.append("mail", mail)

        const clearer=await fetch("/api/cookieclear",{
                 method: "POST",
                 body:formdata ,
             })
        router.push("/login");
        // Reload to ensure all components react to the logged out state
        window.location.reload();
    };

    // Handle scroll effect
    useEffect(() => {
        const datafetch = async () => {
            const res = await fetch("/api/login", { method: "GET" });
            const data = await res.json();
            const mails = JSON.parse(data).mailids
            console.log(mails)
            if (mails) {
                Setmail(mails)
            }

        }
        datafetch()



        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    }, []);

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        document.documentElement.classList.toggle("light", savedTheme === "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.classList.toggle("light", newTheme === "light");
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <nav className={`w-full max-w-7xl transition-all duration-300 rounded-2xl glass ${scrolled ? "py-2 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-white/10 dark:bg-black/40" : "py-4 px-8 bg-transparent border-transparent"}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent-primary blur-lg opacity-20 group-hover:opacity-60 transition-opacity" />
                                <img
                                    src="/exam-app-logo.svg"
                                    alt="Logo"
                                    className="relative h-10 w-auto transition-transform group-hover:scale-110"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white uppercase italic">
                                EXAM<span className="text-accent-primary">IER</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${isActive
                                        ? "text-accent-primary bg-accent-primary/10 shadow-[0_0_20px_rgba(14,165,233,0.1)]"
                                        : "text-gray-600 dark:text-gray-400 hover:text-accent-primary"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl glass hover:border-accent-primary/40 transition-all text-gray-600 dark:text-gray-400 hover:text-accent-primary"
                        >
                            {theme === "light" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        {mail === "" ? (
                            <Link href="/login" className="px-6 py-2.5 rounded-xl border border-accent-primary/20 text-sm font-black uppercase tracking-widest text-accent-primary hover:bg-accent-primary hover:text-white transition-all shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                                Login
                            </Link>
                        ) : (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10">
                                    {mail}
                                </span>
                                <button
                                    onClick={() => setShowLogoutConfirm(true)}
                                    className="px-4 py-2 rounded-xl border border-red-500/20 text-xs font-black uppercase tracking-widest text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button onClick={toggleTheme} className="p-2 rounded-xl glass text-gray-600 dark:text-gray-400">
                            {theme === "light" ? <div className="w-5 h-5 bg-accent-primary rounded-full shadow-lg" /> : <div className="w-5 h-5 bg-gray-600 rounded-full" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl glass text-gray-900 dark:text-white"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 p-4 rounded-xl glass space-y-2 animate-fade-in">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 hover:text-accent-primary bg-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {mail === "" ? (
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] text-center bg-accent-primary text-white"
                            >
                                Get Started
                            </Link>
                        ) : (
                            <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-white/10">
                                <div className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
                                    {mail}
                                </div>
                                <button
                                    onClick={() => {
                                        setShowLogoutConfirm(true);
                                        setIsOpen(false);
                                    }}
                                    className="w-full block px-4 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] text-center bg-red-500 text-white"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </nav>

            {/* Logout Confirmation Modal */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="w-full max-w-sm glass rounded-3xl p-8 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="text-center space-y-4">
                            <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                                Confirm Logout
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Are you sure you want to exit your session?
                            </p>
                            <div className="flex gap-3 mt-8">
                                <button
                                    onClick={() => setShowLogoutConfirm(false)}
                                    className="flex-1 px-6 py-3 rounded-2xl border border-gray-200 dark:border-white/10 text-sm font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                                >
                                    No
                                </button>
                                <button
                                    onClick={() => {
                                        setShowLogoutConfirm(false);
                                        handleLogout();
                                    }}
                                    className="flex-1 px-6 py-3 rounded-2xl bg-red-500 text-white text-sm font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
