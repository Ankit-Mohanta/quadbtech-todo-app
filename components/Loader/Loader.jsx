import React from 'react'

const Loader = () => {
    return (
        <div className="flex gap-2 w-full pt-20 items-center justify-center">
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        </div>
    )
}

export default Loader