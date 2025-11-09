'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='w-full stick top-0 bg-white border-b'>
            <div className='max-w-6xl mx-auto px-4 h-14 flex items-center justify-between'>
                <Link href="/" className='font-semibold text-lg'>Restan Bistro</Link>
                <div className='hidden md:flex items-center gap-6 text-sm'>
                    <Link href='/'>Home</Link>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact Us</Link>
                </div>

                <Link href="/contact" className='text-sm px-3 py-1.5 border rounded-md'>
                     Book Table
               </Link>
            </div>
        </nav>
    );
}