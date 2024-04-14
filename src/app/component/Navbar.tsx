'use client';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
    const { user, isLoaded } = useUser();
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-1.5 h-20 border-b-2 border-[#1c3a63] bg-[#062C80] shadow-lg w-full">
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

            {/* ตรวจสอบว่าผู้ใช้ได้ลงทะเบียนหรือยัง */}
            {!user && (
                <div className="flex lg:flex-1 justify-center">
                    <a href="/sign-in" className='-m-1.5 -p-1.5'>
                        Sign-In
                    </a>
                </div>
            )}
            {/* ถ้าผู้ใช้ลงทะเบียนแล้ว แสดง UserButton */}
            {isLoaded && user && (
                <div className="flex lg:flex-1 justify-center">
                    <UserButton afterSignOutUrl='/' />
                </div>

            )}
        </nav>
    )
}
