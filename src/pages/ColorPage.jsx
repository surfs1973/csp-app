import React from 'react'
import { Link } from 'react-router-dom'
import { LuConstruction } from "react-icons/lu"

const NotFound = () => {
    return (
        <section className="text-center flex flex-col justify-center items-center h-96">
            <LuConstruction className="text-yellow-400 text-8xl mb-4" />
            <h1 className="text-6xl font-bold mb-4">Under Construction</h1>
            <p className="text-xl mb-5">This problem is still being built</p>
            <Link
                to="/"
                className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
            >Go Back
            </Link>
        </section>
    )
}

export default NotFound