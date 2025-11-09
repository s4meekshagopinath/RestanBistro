'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='border-b bg-white text-black'>
            <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <Link href="/" className='font-semibold text-lg'>Restan Bistro</Link>
                <div className='flex items-center gap-4'>
                    <Link href='/' className='text-sm text-black'>Home</Link>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}