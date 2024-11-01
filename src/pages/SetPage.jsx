import { React, useState, useEffect } from 'react'
import ButtonGrid from '../components/ButtonGrid'
import SetsPanel from '../components/SetsPanel'
import Scoreboard from '../components/Scoreboard'
import { initCards } from '../utils/CardUtils'

import GameEndModal from '../components/modals/GameEndModal'
import NewGameModal from '../components/modals/NewGameModal'

const SetPage = ({ profile }) => {
    const [gameState, setGameState] = useState(initCards());
    const [foundSets, setFoundSets] = useState([]);
    const handleFoundSet = (newSet) => {
        setFoundSets((prevSets) => [...prevSets, newSet]);
    };

    const [openNewGame, setOpenNewGame] = useState(false);
    const [openGameEnd, setOpenGameEnd] = useState(false);

    const [time, setTime] = useState(0);

    const startNewGame = () => {
        setGameState(initCards());
        setFoundSets([]);
        setTime(0);
        setOpenNewGame(false);
        setOpenGameEnd(false);
    };

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => setTime(time + 1), 10);
        return () => clearInterval(intervalId);
    }, [time]);

    return (
        <div>
            <div className="px-6 py-6 grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* left panel */}
                <SetsPanel foundSets={foundSets} />

                {/* center panel */}
                <ButtonGrid deck={gameState.deck} firstCards={gameState.firstCards} onFoundSet={handleFoundSet} setOpenGameEnd={setOpenGameEnd} />

                {/* right panel */}
                <Scoreboard score={foundSets.length} time={time} setOpenNewGame={setOpenNewGame}/>
                <NewGameModal open={openNewGame} setOpen={setOpenNewGame} onStartNewGame={startNewGame} />
                <GameEndModal open={openGameEnd} setOpen={setOpenGameEnd} onStartNewGame={startNewGame} />
            </div>
        </div>
    )
}

export default SetPage
