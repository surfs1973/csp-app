// CardGrid.jsx
import React from 'react';
import Card from './Card';

const CardGrid = () => {
    const placeholderCards = Array.from({ length: 12 }, (_, index) => ({
        shape: 'circle',
        color: index % 2 === 0 ? 'lightblue' : 'lightgreen',
    }));

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {placeholderCards.map((card, index) => (
                    <Card key={index} shape={card.shape} color={card.color} />
                ))}
            </div>
        </>
    );
};

export default CardGrid;
