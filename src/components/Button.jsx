import React from 'react'
import { useState, useEffect } from 'react';


const Button = ({ children, bg = 'bg-gray-100' , selectedCards}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            selectedCards.push(children.key)
        } else {
            selectedCards = selectedCards.filter(val => val !== value));
        }
    }, [isActive, value, setSelectedValues]);

    // Click handler to toggle the button state
    const handleClick = () => {
        setIsActive(prev => !prev);
    };

    return (
        <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow">
            {children}
        </button>
    )
}

export default Button