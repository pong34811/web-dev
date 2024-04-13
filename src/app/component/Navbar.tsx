'use client';
import React from 'react'
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
    const { user, isLoaded } = useUser();
    return (
        <header>
            <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border 
            border-t-0 border-r-0 border-b-gray-600"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className='-m-1.5 -p-1.5'>
                        home-js
                    </a>
                </div>
                {
                    isLoaded && user && (
                        <>
                            <Link href="/dashboard">asdas</Link>
                            <UserButton afterSignOutUrl='/' />
                        </>

                    )
                }
            </nav>
        </header>
    )
}
