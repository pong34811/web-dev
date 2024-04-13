'use client';
import { getXataClient } from '@/xata';
import { count } from 'console';
import { create } from 'domain'
import { revalidatePath } from 'next/cache';
import React, { useRef } from 'react'
import { z } from 'zod';

export default function FolderForm({handleCreateFolder}: {handleCreateFolder: 
    (FormData: FormData) => void}) {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form
            className="mb-4 w-full flex gap-x-2 items-center"
            action={(formDate) => {
                handleCreateFolder(formDate);
                ref.current?.reset();
            }}
            ref={ref}
        >
            <div className="grow">
                <label
                    className="text-gray-300 text-sm font-sm font-bold mb-2 hidden"
                    htmlFor="name"
                    aria-label="New Folder"
                >
                    New Name
                </label>
                <input
                    className="shadow appearnce-none border-gray-700 rounded w-full
                    py-2 px-3 text-gray-300 leading-tight focus:outline-none
                    focus:shadow-outline bg-transparent"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="my folder"
                />
            </div>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2
                    px-4 focus:outline-none focus:shadow-outline w-32">
                submit
            </button>
        </form>
    )
}
