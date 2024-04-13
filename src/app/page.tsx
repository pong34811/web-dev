import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

export default function page() {
  const {userId} = auth();
  console.log(userId);
    if (userId) {
        redirect ('/dashboard')
    }
  return (
    <main className="flex justify-center">
      <h1>Next.js 14 Authentication</h1>
    </main>
  )
}
