import React from 'react'
import CardGrid from './components/CardGrid'
import SetsPanel from './components/SetsPanel'
import Scoreboard from './components/Scoreboard'

const App = () => {
    return (
        <div className="flex h-screen">
            {/* left panel */}
            <div className="w-1/4 p-4 bg-gray-100">
                <SetsPanel />
            </div>

            {/* center panel */}
            <div className="flex-grow p-4 bg-white">
                <CardGrid />
            </div>

            {/* right panel */}
            <div className="w-1/4 p-4 bg-gray-100">
                <Scoreboard />
            </div>
        </div>
    )
}

export default App
