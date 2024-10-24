import React from 'react'

const SetsPanel = ({ foundSets }) => {
    return (
        <div className="order-3 bg-white p-6 rounded-lg shadow-2xl lg:order-1">
            <h1 className="text-xl pb-4 text-center">Sets Found</h1>
            <div className="overflow-y-auto max-h-128 bg-gray-100 shadow-inner mx-4 p-4 rounded-lg">
                {foundSets.map((sets, index) => (
                    <div key={index} className="bg-white mx-4 my-4 p-2 rounded-lg shadow-md hover:shadow-lg">
                        {sets.map((card, cardIndex) => (
                            <p key={cardIndex} className="my-1 text-center text-xs">
                                {card.shape} {card.color} {card.shading} {card.number}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SetsPanel