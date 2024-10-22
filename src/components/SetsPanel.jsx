import React from 'react'

const SetsPanel = ({ foundSets }) => {
    return (
        <div className="w-1/4 p-4 bg-gray-200 overflow-hidden max-h-screen">
            <h1 className="text-xl font-bold mb-4 text-center">Sets Found</h1>
            <div className="bg-gray-100 overflow-y-auto rounded-lg max-h-[calc(100vh-4rem)] shadow-inner">
                <div className="grid grid-cols-1 gap-4 p-6">
                    {foundSets.map((sets, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            {sets.map((card, cardIndex) => (
                                <p key={cardIndex} className="mt-1 mb-1 text-center">
                                    {card.shape} {card.color} {card.shading} {card.number}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SetsPanel
