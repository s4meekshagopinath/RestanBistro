'use client'
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed w-full z-30">
      <div className="bg-transparent">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <div className="flex items-center gap-4">
            <img src="https://orders.co/static/99a59eec0735fca313bf2b93349bd5d6/f659b/Italian-Restaurant-Design-Creating-an-Inviting-Ambiance.png" alt="logo" className="h-10 w-auto"/>
            <div style={{fontWeight:700,fontSize:18,color:"#fff"}}>Restan Bistro</div>
          </div>

          <nav className="hidden md:flex gap-8 text-white text-sm font-semibold">
            <a href="#" className="hover:opacity-90">Home</a>
            <a href="/menu" className="hover:opacity-90">Menu</a>
            <a href="/about" className="hover:opacity-90">About</a>
            <a href="/blog" className="hover:opacity-90">Blog</a>
            <a href="/shop" className="hover:opacity-90">Shop</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/register">
              <button className="px-4 py-2 rounded-full border border-[#ff8a00] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white transition">Register</button>
            </Link>
            <button className="md:hidden px-3 py-2 rounded bg-white/10 text-white">☰</button>
          </div>
        </div>
      </div>
    </header>
  )
}