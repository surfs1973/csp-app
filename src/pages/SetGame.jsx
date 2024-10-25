import { React, useState } from 'react'
import ButtonGrid from '../components/ButtonGrid'
import SetsPanel from '../components/SetsPanel'
import Scoreboard from '../components/Scoreboard'
import { shuffleDeck, generateDeck, hasValidSet } from '../utils/CardUtils'

const SetGame = () => {
    const deck = shuffleDeck(generateDeck());
    while (!hasValidSet(deck.slice(0, 12))) {
        shuffleDeck(deck);
    }
    const firstCards = shuffleDeck(deck.splice(0, 12));


    const [foundSets, setFoundSets] = useState([]);
    const handleFoundSet = (newSet) => {
        setFoundSets((prevSets) => [...prevSets, newSet]);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="px-6 py-6 grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* left panel */}
                <SetsPanel foundSets={foundSets} />

                {/* center panel */}
                <ButtonGrid deck={deck} firstCards={firstCards} onFoundSet={handleFoundSet} />

                {/* right panel */}
                <Scoreboard score={foundSets.length} />
            </div>
        </div>
    )
}

export default SetGame
