"use client";
export default function Navbar() {
    return (
        <div className="w-full h-[70px] bg-[#3b2f2f] text-white flex items-center justify-between px-6 md:px-20">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75" alt="Restan Bistro logo" className="h-[45px] w-auto"/>

            <div className="hidden md:flex space-x-8 text-sm font-semibold">
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
            </div>

            <button className="bg-[#a66a4a] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#8c563c]">
                Book Table
            </button>
        </div>
    )
}