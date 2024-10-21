import React from 'react';
import Button from './Button';
import { generateDeck, shuffleDeck, isSet } from '../utils/CardUtils'

const ButtonGrid = ({ deck }) => {
    return (
        <div className="grid grid-cols-3 gap-4 rounded-lg block">
            {shuffleDeck(deck).slice(0, 12).map((card) => (
                <Button key={ card.key }>
                    { card.shape } { card.color } { card.shading } { card.number }
                </Button>
            ))}
        </div>
    );
};

export default ButtonGrid;
