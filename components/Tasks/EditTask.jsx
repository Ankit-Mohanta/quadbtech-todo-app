"use client"

import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'

const EditTask = ({ currentName, currentDescription, currentState, index }) => {
    const [name, setName] = useState(currentName)
    const [description, setDescription] = useState(currentDescription)

    const router = useRouter()

    const allTasks = JSON.parse(localStorage.getItem('tasks')) || []

    function handleSaveTask() {

        const task = {
            name,
            description,
            state: currentState
        }

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks[index] = task
        localStorage.setItem('tasks', JSON.stringify(tasks));

        setName('')
        setDescription('')

        router.refresh()

    }

    return (
        <Dialog>

            <DialogTrigger asChild>

                <button
                    name='task_edit_button'
                    className='w-10 h-10 rounded-md bg-green-200 text-green-600 flex items-center justify-center cursor-pointer'>
                    <Pencil />
                </button>

            </DialogTrigger>

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>
                        Update your task
                    </DialogTitle>

                </DialogHeader>

                <div>

                    <div
                        className='flex flex-col gap-2'>

                        <label htmlFor="heading" className='text-base font-semibold'>
                            Name:
                        </label>

                        <input
                            type="text"
                            placeholder='Enter the name of your task'
                            value={name}
                            className='min-w-80 w-full outline-none border rounded border-gray-400 p-2'
                            onChange={(e) => { setName(e.target.value) }} />

                    </div>

                    <div
                        className='flex flex-col gap-2 mt-3'>

                        <label htmlFor="heading" className='text-base font-semibold'>
                            Description:
                        </label>

                        <textarea
                            placeholder='Enter the description'
                            value={description}
                            className='min-w-80 w-full outline-none border rounded border-gray-400 p-2 resize-none'
                            onChange={(e) => { setDescription(e.target.value) }} />

                    </div>

                </div>

                <DialogFooter>

                    <DialogClose asChild>

                        <button
                            name='add_task_cancel_button'
                            className='bg-red-200 text-red-600 font-semibold px-5 py-2 rounded-md'
                            onClick={() => {
                                setName('')
                                setDescription('')
                            }}>
                            Cancel
                        </button>

                    </DialogClose>

                    <DialogClose asChild>

                        <button
                            name='add_task_confirm_button'
                            className={`transition ${name.length > 0 && description.length > 0 ? 'bg-green-200 text-green-600' : 'bg-black text-white'} font-medium px-5 py-2 rounded-md`}
                            onClick={() => { handleSaveTask() }}>
                            {
                                name.length > 0 ?
                                    description.length > 0 ?
                                        "Update"
                                        :
                                        "Please add description"
                                    :
                                    "Please add name"
                            }
                        </button>

                    </DialogClose>

                </DialogFooter>

            </DialogContent>

        </Dialog>
    )
}

export default EditTask