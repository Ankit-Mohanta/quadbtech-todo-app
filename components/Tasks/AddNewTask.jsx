"use client"

import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useRouter } from 'next/navigation'
import { MessageCirclePlus } from 'lucide-react'

const AddNewTask = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const allTasks =JSON.parse(localStorage.getItem('tasks')) || [] 

    const router = useRouter()

    function handleSaveTask() {

        const task = {
            name,
            description,
            state: "Not completed"
        }

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        setName('')
        setDescription('')

        router.refresh()

    }

    return (
        <Dialog>

            <DialogTrigger asChild>

                {
                    allTasks.length > 0 ?
                <button
                    name='task_add_button'
                    className='h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white text-lg flex items-center justify-center'>
                    <MessageCirclePlus className='w-8 h-8' />
                </button>
                :
                <button
                    name='task_add_button'
                    className='px-5 py-2 rounded-md bg-gradient-to-r from-purple-400 to-pink-400 text-white text-lg'>
                    Add task
                </button>
                }

            </DialogTrigger>

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>
                        {
                            allTasks.lenght > 0 ?
                                "Add a new task"
                                :
                                "Add your first task"
                        }
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
                            onClick={()=>{handleSaveTask()}}>
                            {
                                name.length > 0 ?
                                    description.length > 0 ?
                                        "Save"
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

export default AddNewTask