import React from 'react';
import { useState, useEffect } from 'react';
import { findSet, hasValidSet, isSet } from '../utils/CardUtils';
import Shapes from '../utils/Shapes';
import { toast } from 'react-toastify'

const ButtonGrid = ({ deck, firstCards, onFoundSet, setOpenGameEnd }) => {
    const [activeButtons, setActiveButtons] = useState([]);
    const [displayedCards, setDisplayedCards] = useState(firstCards);
    const [remainingDeck, setRemainingDeck] = useState(deck);
    
    useEffect(() => {
        setDisplayedCards(firstCards);
        setRemainingDeck(deck);
        setActiveButtons([]);
    }, [firstCards, deck]);

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
                onFoundSet([...activeButtons]);
                toast.success('Set found');
                replaceCards(indices);
            } else {
                toast.error('This is not a set');
            }
            setActiveButtons([]);
        }
    }, [activeButtons]);

    const replaceCards = (indices) => {
        let newDisplayedCards = [...displayedCards];
        if (remainingDeck.length === 0) {
            // remove the cards from the screen
            indices.sort((a, b) => b - a);
            indices.forEach(index => {
                newDisplayedCards.splice(index, 1);
            });
        } else {
            // replace the cards on the screen
            let newCards = remainingDeck.splice(0, 3);
            indices.forEach((index, idx) => {
                newDisplayedCards[index] = newCards[idx];
            });
            // keep adding cards until there is a valid set or there are no more remaining cards
            while (!hasValidSet(newDisplayedCards) && remainingDeck.length > 0) {
                const addCards = remainingDeck.splice(0, 3);
                newDisplayedCards = [...newDisplayedCards, addCards];
            }
        }
        // check if there is a valid set available
        if (!hasValidSet(newDisplayedCards)) {
            // end of game
            setOpenGameEnd(true);
        }
        // console.log(findSet(newDisplayedCards));
        setDisplayedCards(newDisplayedCards);
        setRemainingDeck(remainingDeck);
    };

    return (
        <div className="col-span-2 bg-white p-4 gap-4 order-2 rounded-lg shadow-2xl">
            <div className="grid grid-cols-3 gap-4 p-6">
                {displayedCards.map((card, index) => (
                    <button
                        key={index}
                        onClick={() => selectClick(card)}
                        className={
                            `bg-white hover:shadow-xl hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 
                            rounded shadow flex items-center justify-center
                            ${activeButtons.includes(card) ? 'ring ring-indigo-200' : ''}`
                        }
                    >
                        <Shapes color={card.color} shape={card.shape} shading={card.shading} number={card.number} classes="h-7 xs:h-7 sm:h-20 md:h-24 lg:h-16 xl:h-20 2xl:h-24" />
                    </button>
                ))}
            </div>
            <div className="text-center">
                <p className="font-medium">
                    {`Remaining cards: `}
                    <b>
                        {remainingDeck.length}
                    </b>
                </p>
            </div>
        </div>
    );
};

export default ButtonGrid;
