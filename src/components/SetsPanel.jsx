import React from 'react'

const SetsPanel = ({ foundSets }) => {
    return (
        <div className="col-span-1 flex order-3 bg-white p-6 rounded-lg shadow-2xl md:order-1">
            <h1 className="text-xl font-bold mb-2 text-center">Sets Found</h1>
            <div className="overflow-y-auto rounded-lg bg-gray-100 shaddow-inner">
                {foundSets.map((sets, index) => (
                    <div key={index} className="bg-white m-6 p-6 rounded-lg shadow-md">
                        {sets.map((card, cardIndex) => (
                            <p key={cardIndex} className="mt-1 mb-1 text-center text-xs">
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