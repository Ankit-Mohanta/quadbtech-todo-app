"use client"

import React from 'react'
import AddNewTask from './AddNewTask'
import { CircleCheckIcon, Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

const Tasks = () => {

    const router = useRouter()

    const allTasks = JSON.parse(localStorage.getItem('tasks')) || []

    function handleChangeState(index) {

        const tempTask = allTasks[index]
        tempTask.state = "Completed"

        allTasks[index] = tempTask

        localStorage.setItem('tasks', JSON.stringify(allTasks));

        router.refresh()

    }

    return (
        <div
            className="w-full pt-16">

            {
                allTasks.length > 0 ?
                    <div
                        className='w-full grid grid-cols-1 1000px:grid-cols-2 1600px:grid-cols-3 gap-6'>

                        {
                            allTasks.map((details, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='w-full px-6 py-3 rounded-md drop-shadow bg-green-50 flex flex-col gap-4'>

                                        <div
                                            className='w-full flex items-center justify-between gap-5 flex-wrap'>

                                            <p
                                                className='text-xl md:text-2xl font-semibold'>
                                                {
                                                    details.name
                                                }
                                            </p>

                                            <p
                                                className={`text-xl font-medium ${details.state === "Not completed" ? 'text-red-600' : details.state === "Ongoing" ? 'text-orange-600' : details.state === "Completed" && 'text-green-600'}`}>
                                                {
                                                    details.state
                                                }
                                            </p>

                                        </div>

                                        <p
                                            className='text-lg'>
                                            {details.description}
                                        </p>

                                        <div
                                            className='w-full flex items-center justify-end gap-5'>

                                            <div
                                                className={`w-10 h-10 rounded-md flex items-center justify-center transition cursor-pointer ${details.state === "Not completed" ? 'border-none' : 'border border-green-200 bg-green-200 text-green-600'}`}
                                                onClick={() => { handleChangeState(index) }}>
                                                <CircleCheckIcon />
                                            </div>

                                            {/* <button
                                    name='task_edit_button'
                                    className='w-10 h-10 rounded-md bg-green-200 text-green-600 flex items-center justify-center cursor-pointer'>
                                        <Pencil />
                                    </button> */}

                                            <EditTask
                                                currentName={details.name}
                                                currentDescription={details.description}
                                                currentState={details.state}
                                                index={index} />

                                            {/* <button
                                    name='task_delete_button'
                                    className='w-10 h-10 rounded-md bg-red-200 text-red-600 flex items-center justify-center cursor-pointer'>

                                        <Trash2 />

                                    </button> */}

                                            <DeleteTask index={index} />

                                        </div>

                                    </div>
                                )
                            })
                        }

                        <div
                        className='fixed bottom-3 right-3'>

                            <AddNewTask />

                        </div>

                    </div>
                    :
                    <div
                        className='w-full text-center h-fit flex flex-col gap-3 items-center justify-center pt-[10vh]'>

                        <p className='text-xl md:text-3xl font-semibold'>
                            No tasks available
                        </p>

                        <AddNewTask />

                    </div>
            }

        </div>
    )
}

export default Tasks