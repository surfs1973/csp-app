import React from 'react'

const Card = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <div className={`${bg} p-4 rounded-lg shadow-lg flex justify-center items-center`}>
            { children }
        </div>
    )
}

export default Card