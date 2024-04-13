import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

export default function page() {
  const {userId} = auth();
    if (userId) {
        redirect ('/dashboard')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js 14 Authentication</h1>
    </main>
  )
}
