import React from 'react'
import Shapes from '../utils/Shapes';

const SetsPanel = ({ foundSets }) => {
    return (
        <div className="col-span-2 order-3 bg-white p-6 rounded-lg shadow-2xl lg:order-2 lg:col-span-2 xl:col-span-1">
            <h1 className="text-xl pb-4 text-center">Sets Found</h1>
            <div className="overflow-y-auto max-h-128 bg-gray-100 shadow-inner mx-2 rounded-lg">
                {foundSets.map((sets, index) => (
                    <div key={index} className="flex items-center justify-center bg-white mx-4 my-4 p-3 rounded-lg shadow-md hover:shadow-lg">
                        {sets.map((card) => (
                            <Shapes key={card.key} color={card.color} shape={card.shape} shading={card.shading} number={card.number} classes="border border-black mx-1 p-2 h-16 xxl:h-12 xl:h-8"/>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SetsPanel