import React from 'react'
import ButtonGrid from './components/ButtonGrid'
import SetsPanel from './components/SetsPanel'
import Scoreboard from './components/Scoreboard'
import MainLayout from './layouts/MainLayout'
import { generateDeck, shuffleDeck, isSet } from './utils/CardUtils'

const App = () => {
    // generate and shuffle deck
    const deck = shuffleDeck(generateDeck());
    
    return (
        <>
            <MainLayout />
            <div className="flex h-screen">
                {/* left panel */}
                <div className="w-1/4 p-4 bg-gray-100">
                    <SetsPanel />
                </div>

                {/* center panel */}
                <div className="flex-grow p-4 bg-white">
                    <ButtonGrid deck={ deck }/>
                </div>

                {/* right panel */}
                <div className="w-1/4 p-4 bg-gray-100">
                    <Scoreboard />
                </div>
            </div>

        </>
    )
}

export default App
