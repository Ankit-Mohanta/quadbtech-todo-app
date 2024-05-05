"use client"

import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const DeleteTask = ({index}) => {

    const router = useRouter()

    function handleSaveTask() {

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        router.refresh()

    }

    return (
        <Dialog>

            <DialogTrigger asChild>

                <button
                    name='task_delete_button'
                    className='w-10 h-10 rounded-md bg-red-200 text-red-600 flex items-center justify-center cursor-pointer'>

                    <Trash2 />

                </button>

            </DialogTrigger>

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>
                        Are you sure you want to delete it?
                    </DialogTitle>

                </DialogHeader>
                <DialogFooter>

                    <DialogClose asChild>

                        <button
                            name='add_task_cancel_button'
                            className='bg-red-200 text-red-600 font-semibold px-5 py-2 rounded-md'>
                            Cancel
                        </button>

                    </DialogClose>

                    <DialogClose asChild>

                        <button
                            name='add_task_confirm_button'
                            className={`transition bg-green-200 text-green-600 font-medium px-5 py-2 rounded-md`}
                            onClick={() => { handleSaveTask() }}>
                            Delete
                        </button>

                    </DialogClose>

                </DialogFooter>

            </DialogContent>

        </Dialog>
    )
}

export default DeleteTask