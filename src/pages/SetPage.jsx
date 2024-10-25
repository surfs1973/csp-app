import { React, useState, useEffect } from 'react'
import ButtonGrid from '../components/ButtonGrid'
import SetsPanel from '../components/SetsPanel'
import Scoreboard from '../components/Scoreboard'
import Modal from '../components/Modal'
import { initCards } from '../utils/CardUtils'

const SetPage = () => {
    const [gameState, setGameState] = useState(initCards());
    const [foundSets, setFoundSets] = useState([]);
    const handleFoundSet = (newSet) => {
        setFoundSets((prevSets) => [...prevSets, newSet]);
    };

    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(0);

    const startNewGame = () => {
        setGameState(initCards());
        setFoundSets([]);
        setTime(0);
        setOpen(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 10);
        return () => clearInterval(intervalId);
    }, [time]);

    return (
        <div>
            <div className="px-6 py-6 grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* left panel */}
                <SetsPanel foundSets={foundSets} />

                {/* center panel */}
                <ButtonGrid deck={gameState.deck} firstCards={gameState.firstCards} onFoundSet={handleFoundSet} />

                {/* right panel */}
                <Scoreboard score={foundSets.length} time={time} />
                <button onClick={() => setOpen(true)} className="bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-800">
                    Toggle Modal
                </button>

                <Modal open={open} setOpen={setOpen} onStartNewGame={startNewGame} />
            </div>
        </div>
    )
}

export default SetPage
