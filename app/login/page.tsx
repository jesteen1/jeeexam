"use client"

import { useState,useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [name, Setname] = useState("")
    const [email, Setemail] = useState("")
    const [pass, Setpass] = useState("")
    const [click, Setclick] = useState(true)
    const login=useRef(null)
    const router = useRouter()
    const handleSubmit = async () => {

        const formdata = new FormData()
        if (isLogin == false) {
            Setclick(false)
        formdata.append("name", name)
        formdata.append("Email", email)
        formdata.append("password", pass)
         

             const res = await fetch("/api/posts", {
                 method: "POST",
                 body: formdata,
             })
            const data = await res.json()
            
            if (data.info=="already"){
window.alert("you alredy have the account")

            }
            else{
 router.push("/auth")
            }
           
        

    }
    else{
        const formdata1 = new FormData()
        
         formdata1.append("Email", email)
        formdata1.append("password", pass)
         const res = await fetch("/api/login", {
                 method: "POST",
                 body: formdata1,
             })
         const dataapi=await res.json()   
        // alert(dataapi)
         if (dataapi.info=="wrong"){
              alert(" the password or mailid was wrong re-enter")      
         }
         else{


 window.location.href="/";
         }
       
    }

        }

useEffect(()=> {
    const datafetch= async() =>{
 const res = await fetch("/api/login",{method:"GET"});
const data = await res.json();


    }
})      
    const getdata = (d: any) => {
        console.log(d)
    }
    const onsend = (d: any) => {
        console.log(d)
    }
    return (

        <section>



            <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-accent-primary/30 flex items-center justify-center p-6">

                {/* Background Aurora */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="aurora-blob w-[500px] h-[500px] bg-accent-primary/10 top-[-5%] left-[-5%] animate-aurora" />
                    <div className="aurora-blob w-[400px] h-[400px] bg-accent-secondary/10 bottom-[10%] right-[-5%] animate-aurora [animation-delay:-8s]" />
                </div>

                {/* Auth Card */}
                <div className="relative z-10 w-full max-w-[450px]">
                    <div className="p-1 rounded-[40px] glass border-foreground/5 bg-linear-to-tr from-accent-primary/20 via-transparent to-accent-secondary/20 shadow-2xl">
                        <div className="bg-white/5 dark:bg-black/40 backdrop-blur-3xl p-10 rounded-[38px] border border-white/10">

                            {/* Header */}
                            <div className="text-center mb-10">
                                <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-accent-primary/20 text-accent-primary text-[10px] font-black uppercase tracking-[0.4em]">
                                    {isLogin ? "Welcome Back" : "New Account"}
                                </div>
                                <h2 className="text-4xl font-black uppercase italic tracking-tighter">
                                    {isLogin ? "LOG" : "SIGN"}<span className="text-accent-primary">{isLogin ? "IN" : "UP"}</span>
                                </h2>
                            </div>

                            {/* Form */}
                            <form className="space-y-5"  onSubmit={(e) => {
                                e.preventDefault();
                                alert(isLogin ? "Terminal access granted!" : "Database indexed. Account created!");
                                handleSubmit()
                            }}>
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="enter the name"
                                            value={name}
                                            onChange={(e) => Setname(e.target.value.toUpperCase())}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-accent-primary/50 transition-colors"
                                        />
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-1">Email Terminal</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="user@examier.com"
                                        value={email}
                                        onChange={(e) => Setemail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-accent-primary/50 transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-1">Secure Pin</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            required
                                            placeholder="••••••••"
                                            value={pass}
                                            onChange={(e) => Setpass(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-accent-primary/50 transition-colors pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-accent-primary transition-colors"
                                        >
                                            {showPassword ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {isLogin && (
                                    <div className="text-right">
                                        <Link href="/auth" className="text-[10px] font-bold uppercase tracking-widest text-accent-primary hover:text-accent-primary/70 transition-colors">
                                            Forgot Pin?
                                        </Link>
                                    </div>
                                )}

                                {isLogin ? <button type="submit" className="w-full py-5 bg-foreground text-background font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                                    {isLogin ? "Access Terminal" : "Initialize Account"}
                                </button> : <button className="w-full py-5 bg-foreground text-background font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                                    {isLogin ? "Access Terminal" : "Initialize Account"}
                                </button>}
                            </form>

                            {/* Social Login Divider */}
                            <div className="relative my-10 flex items-center py-5">
                                <div className="grow border-t border-foreground/10"></div>
                                <span className="mx-4 shrink text-[10px] font-black uppercase tracking-widest text-foreground/20">Sync Data With</span>
                                <div className="grow border-t border-foreground/10"></div>
                            </div>

                            {/* Social Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <button type="button" className="flex items-center justify-center gap-3 py-4 glass border-foreground/5 rounded-2xl hover:bg-white/5 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
                                </button>
                                <button type="button" className="flex items-center justify-center gap-3 py-4 glass border-foreground/5 rounded-2xl hover:bg-white/5 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                                </button>
                            </div>

                            {/* Switch Link */}
                            <div className="mt-10 text-center">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                                    {isLogin ? "Strategic entry?" : "Already indexed?"}{" "}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-[10px] font-black uppercase tracking-widest text-accent-primary hover:text-accent-primary/70 transition-colors"
                                >
                                    {isLogin ? "Create Account" : "Access Terminal"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Decorative Noise */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>


        </section>
    );
}
