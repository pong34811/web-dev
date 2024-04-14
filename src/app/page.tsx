import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

export default function page() {
  const { userId } = auth();
  console.log(userId);
  if (userId) {
    redirect('/dashboard');
  }
  return (
    
    <main className="flex flex-col justify-center items-center px-4 py-2 mt-5 w-full max-w-screen-xl mx-auto">
        <div className="text-center px-4 py-2 w-full sm:w-3/4 md:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">ยินดีต้อนรับสู่ JATHAI</h1>
          <p className="text-sm sm:text-base md:text-lg">เรามีความยินดีที่ได้พบคุณ! สำรวจและสัมผัสประสบการณ์ที่ไม่เหมือนใครกับเรา ที่นี่ที่เดียว JATHAI.</p>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:w-3/4 md:w-2/3">
          <div className="flex-1 flex flex-col justify-center items-center px-4 py-2 bg-custom min-h-1/2">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-4">Trello brings all your tasks, teammates, and tools together</h1>
            <button className="button-custom mb-4">Sign Up - It's Free!</button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center px-4 py-2 bg-custom min-h-1/2">
            <img
              src='/img/logo.png'
              alt='Logo'
              className="w-full h-auto object-contain"
            />            
          </div>
        </div>
        <div className="text-center px-4 py-2 w-full sm:w-3/4 md:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">ยินดีต้อนรับสู่ JATHAI</h1>
          <p className="text-sm sm:text-base md:text-lg">เรามีความยินดีที่ได้พบคุณ! สำรวจและสัมผัสประสบการณ์ที่ไม่เหมือนใครกับเรา ที่นี่ที่เดียว JATHAI.</p>
        </div>
        <div className="text-center px-4 py-2 w-full sm:w-3/4 md:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">ยินดีต้อนรับสู่ JATHAI</h1>
          <p className="text-sm sm:text-base md:text-lg">เรามีความยินดีที่ได้พบคุณ! สำรวจและสัมผัสประสบการณ์ที่ไม่เหมือนใครกับเรา ที่นี่ที่เดียว JATHAI.</p>
        </div>
        <div className="text-center px-4 py-2 w-full sm:w-3/4 md:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">ยินดีต้อนรับสู่ JATHAI</h1>
          <p className="text-sm sm:text-base md:text-lg">เรามีความยินดีที่ได้พบคุณ! สำรวจและสัมผัสประสบการณ์ที่ไม่เหมือนใครกับเรา ที่นี่ที่เดียว JATHAI.</p>
        </div>
             
      </main>
   
  );
}
