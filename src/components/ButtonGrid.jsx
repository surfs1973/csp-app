import React from 'react';
import { useState, useEffect } from 'react';
import { hasValidSet, isSet } from '../utils/CardUtils';

const ButtonGrid = ({ deck }) => {
    const [activeButtons, setActiveButtons] = useState([]);
    const [displayedCards, setDisplayedCards] = useState(deck.splice(0, 12));
    const [remainingDeck, setRemainingDeck] = useState([...deck]);
    console.log(remainingDeck.length)

    const selectClick = (card) => {
        if (activeButtons.includes(card)) {
            setActiveButtons(activeButtons.filter(i => i !== card));
        } else {
            if (activeButtons.length < 3) {
                setActiveButtons([...activeButtons, card]);
            }
        }
    };

    useEffect(() => {
        if (activeButtons.length === 3) {
            const indices = displayedCards
                .map((c, index) => (activeButtons.includes(c) ? index : -1))
                .filter(index => index !== -1);
                
            if (isSet(activeButtons)) {
                console.log(activeButtons);
                console.log("This is a set");
                replaceCards(indices);
            } else {
                console.log("This is not a set");
            }
            setActiveButtons([]);
        }
    }, [activeButtons]);

    const replaceCards = (indices) => {
        let newDisplayedCards = [...displayedCards];
        let newCards = remainingDeck.splice(0, 3);
        indices.forEach((index, idx) => {
            newDisplayedCards[index] = newCards[idx];
        });
        while (!hasValidSet(newDisplayedCards)) {
            const addCards = remainingDeck.splice(0, 3);
            newDisplayedCards = [...newDisplayedCards, addCards];
        }
        setDisplayedCards(newDisplayedCards);
        setRemainingDeck(remainingDeck);
    };

    return (
        <div className="grid grid-cols-3 gap-4 rounded-lg block">
            {displayedCards.map((card, index) => (
                <button
                    key={index}
                    onClick={() => selectClick(card)}
                    className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
                >
                    {card.shape} {card.color} {card.shading} {card.number}
                </button>
            ))}
        </div>
    );
};

export default ButtonGrid;
