import { React, useState, useEffect } from 'react'
import ButtonGrid from './components/ButtonGrid'
import SetsPanel from './components/SetsPanel'
import Scoreboard from './components/Scoreboard'
import MainLayout from './layouts/MainLayout'
import { generateDeck, shuffleDeck, hasValidSet } from './utils/CardUtils'

const deck = shuffleDeck(generateDeck());
while (!hasValidSet(deck.slice(0, 12))) {
    shuffleDeck(deck);
}
const firstCards = shuffleDeck(deck.splice(0, 12));


const App = () => {
    const [foundSets, setFoundSets] = useState([]);
    const handleFoundSet = (newSet) => {
        setFoundSets((prevSets) => [...prevSets, newSet]);
    };

    return (
        <div>
            <MainLayout />
            <div className="h-screen grid grid-cols-1 gap-3 md:grid-cols-4">
                {/* left panel */}
                <SetsPanel foundSets={foundSets} />

                {/* center panel */}
                <ButtonGrid deck={deck} firstCards={firstCards} onFoundSet={handleFoundSet} />

                {/* right panel */}
                <Scoreboard />
            </div>

        </div>
    )
}

export default App
