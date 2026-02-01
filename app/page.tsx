"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
const [Precision,SetPrecision]=useState(0)
const [Success,SetSuccess]=useState(0)
const [Users,SetUsers]=useState(0)
const [Simulations,SetSimulations]=useState(0)
const animatenum=()=>{
  /*
    { label: "Precision", val: "99.9%" },
            { label: "Simulations", val: "500+" },
            { label: "Users", val: "10K+" },
            { label: "Success Rate", val: "85%" }
  
  */
   var temp1=0
  var temp2=0
  var temp3=0
  var temp4=0
let timer=setInterval(() => {
  temp1=temp1+12
  temp2=temp2+1.6
  temp3=temp3+86
  temp4=temp4+16
  SetPrecision(+temp1.toFixed(2))
  SetUsers(+temp2.toFixed(2))
  SetSimulations(+temp3.toFixed(2))   
  SetSuccess(+temp4.toFixed(2))
  if (temp2>20){
  console.log("stopped")
clearInterval(timer);
}
}, 300);

  

 }



useEffect(()=>{
setTimeout(animatenum,1000)



},[])
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 selection:bg-accent-primary/30">

      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-blob w-[600px] h-[600px] bg-accent-primary dark:bg-accent-primary/20 top-[-10%] left-[-5%] animate-aurora" />
        <div className="aurora-blob w-[500px] h-[500px] bg-accent-secondary dark:bg-accent-secondary/20 bottom-[-10%] right-[-5%] animate-aurora [animation-delay:-5s]" />
        <div className="aurora-blob w-[400px] h-[400px] bg-indigo-500/20 top-[40%] left-[30%] animate-aurora [animation-delay:-10s]" />

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] dark:opacity-50" />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <div className="w-full max-w-5xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border-accent-primary/20 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Next-Gen Exam Portal</span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-8">
            <span className="block text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/40">LEVEL UP</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[size:200%] animate-[gradient_8s_linear_infinite] drop-shadow-[0_0_30px_rgba(45,212,191,0.2)]">YOUR RESULTS</span>
          </h1>

          <p className="max-w-xl mx-auto text-foreground/60 text-lg md:text-xl font-medium tracking-tight mb-12 leading-relaxed">
            Experience the future of academic assessment. Immersive simulations, real-time analytics, and precision-engineered mock exams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/introduction" className="group relative px-10 py-5 bg-foreground text-background font-black uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <span className="relative z-10">Start Simulation</span>
              <div className="absolute inset-0 bg-accent-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            <a href="/about" className="px-10 py-5 glass border-foreground/10 text-foreground font-black uppercase tracking-widest rounded-2xl hover:bg-foreground/5 hover:border-accent-primary/40 transition-all active:scale-95">
              Learn More
            </a>
          </div>
        </div>

        {/* Feature Grid Mini */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          {[
            { label: "Precision", val: Precision+"%" },
            { label: "Simulations", val: Simulations+"+" },
            { label: "Users", val: Users+"K+" },
            { label: "Success Rate", val: Success+"%" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl glass border-foreground/5 text-center">
              <div className="text-2xl font-black text-accent-primary mb-1 uppercase tracking-tighter">{stat.val}</div>
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Decorative Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
