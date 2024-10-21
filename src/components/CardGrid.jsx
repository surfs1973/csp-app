// CardGrid.jsx
import React from 'react';
import Card from './Card';

const CardGrid = () => {
    const placeholderCards = ["blue", "red", "green", "yellow"]
    return (
        <>
            <div className="relative rounded-xl">
                <div className="grid grid-cols-3 gap-4 rounded-lg block">
                    {placeholderCards.map(() => (
                        <Card>
                            <h1>Hello world</h1>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardGrid;
