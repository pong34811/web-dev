import { getXataClient } from '@/xata'
import React from 'react'
import FolderForm from './FolderForm';
import { z } from 'zod';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate-path';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Navbar from '../component/Navbar';

const Schema = z.object({
  name: z.string().min(5)
})
export default async function DashboardPage() {
  const { userId } = auth();
  const xataCilent = getXataClient();

  if (!userId) {
    redirect('/');
  }
  const folders = await xataCilent.db.folders.filter({
    userId,
  })
    .getMany();

  async function createFolder(formDate: FormData) {
    'use server';
    const parsedForm = Schema.parse({
      name: formDate.get('name')
    });
    if (!userId) {
      return;
    }
    const newRecord = { ...parsedForm, userId }    
    const xataCilent = getXataClient();
    await xataCilent.db.folders.create(newRecord);
    revalidatePath('/');
    //console.log(formDate.get('name'));
  }
  return (
    <main>      
      <h1 className='mb-04'>
        dashboard page
      </h1>
      <FolderForm handleCreateFolder={createFolder} />
      <div className="mb-10">

      </div>
      {folders.map(folder => (
        <p key={folder.id}>{folder.name}</p>
      ))}

    </main>
  )
}
