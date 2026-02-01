"use client";


import { json } from "stream/consumers";
import OtpVerification from "../components/otp";
import { useRouter } from "next/navigation";
export default function OtpPage() {
    const router=useRouter()
    const handleVerify = async (code: any) => {
        console.log("OTP Verification requested for code:", code);
        const res = await fetch("/api/otpcheck", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ coded:code })
        })
        const data = await res.json()
        if (data.data === "done") {
            window.alert("Verification Successful!")
            // router.push("/dashboard") // Add your next page here
            router.push("/")
        } else {
            window.alert("Invalid OTP"+data.data)
        }
    };

    const handleResend = async () => {
        console.log("OTP Resend requested");
        await fetch("/api/otpcheck", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({coded:"resend"}),
        })
        window.alert("New OTP sent!")
    };

    return (
        <main className="min-h-screen bg-background">
            <OtpVerification
                onVerify={handleVerify}
                onResend={handleResend}
            />
        </main>
    );
}
