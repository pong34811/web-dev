'use client';
import React from 'react'
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
    const { user, isLoaded } = useUser();
    return (
        <header>
            <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border 
            border-t-0 border-r-0 border-b-gray-600 bg-[#062C80]"
                aria-label="Global"
            >
                <div className="flex lg:flex-1 justify-center">
                    <a href="/" className='-m-1.5 -p-1.5'>
                        home-js
                    </a>
                </div>
                <div className="flex lg:flex-1 justify-center">
                 <img 
                 src='/img/logo.png' 
                 alt='Logo' 
                 width={80} 
                 />
                </div>
                
                <div className="flex lg:flex-1 justify-center">
                <a href="/sign-in" className='-m-1.5 -p-1.5'>
                        Sign-In
                    </a>
                </div>
                {
                    isLoaded && user && (
                        <>
                            <Link href="/dashboard">Da</Link>
                            <UserButton afterSignOutUrl='/' />
                        </>

                    )
                }
            </nav>
        </header>
    )
}
