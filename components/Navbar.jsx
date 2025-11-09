'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='border-b'>
            <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <Link href="/" className='font-semibold'>Restan Bistro</Link>
                <div className='flex gap-4 text-sm'>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}