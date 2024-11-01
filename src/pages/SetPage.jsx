import { React, useState, useEffect } from 'react';
import ButtonGrid from '../components/ButtonGrid';
import SetsPanel from '../components/SetsPanel';
import Scoreboard from '../components/Scoreboard';
import { initCards, findSet } from '../utils/CardUtils';

import GameEndModal from '../components/modals/GameEndModal';
import NewGameModal from '../components/modals/NewGameModal';
import GoHomeModal from "../components/modals/GoHomeModal";

const SetPage = ({ profile, editProfile, foundSets, setFoundSets }) => {
    const [gameState, setGameState] = useState(initCards());
    const [time, setTime] = useState(0);
    const [openNewGame, setOpenNewGame] = useState(false);
    const [openGameEnd, setOpenGameEnd] = useState(false);
    const [openGoHome, setOpenGoHome] = useState(false);

    const handleFoundSet = (newSet) => {
        setFoundSets((prevSets) => [...prevSets, newSet]);
    };

    const updateProfileStats = () => {
        if (foundSets.length > 0) {
            editProfile({
                total_games: profile.total_games + 1,
                total_sets: profile.total_sets + foundSets.length,
                total_time: profile.total_time + time
            });
        }
    };

    const updateProfileStatsComplete = () => {
        if (foundSets.length > 0) {
            editProfile({
                total_games: profile.total_games + 1,
                total_sets: profile.total_sets + foundSets.length,
                total_time: profile.total_time + time,
                games_completed: profile.games_completed + 1
            });
        }
    };

    const startNewGame = () => {
        setGameState(initCards());
        setFoundSets([]);
        setTime(0);
        updateProfileStats();
        setOpenNewGame(false);
        setOpenGameEnd(false);
    };

    const startNewGameCompleted = () => {
        setGameState(initCards());
        setFoundSets([]);
        setTime(0);
        updateProfileStatsComplete();
        setOpenNewGame(false);
        setOpenGameEnd(false);
    };

    useEffect(() => {
        let intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
        return () => clearInterval(intervalId);
    }, []);

    // debug to show set on screen
    // useEffect(() => {
    //     console.log(findSet(gameState.firstCards));
    // }, [gameState.firstCards]);

    return (
        <div>
            <div className="px-6 py-6 grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* left panel */}
                <SetsPanel foundSets={foundSets} />

                {/* center panel */}
                <ButtonGrid deck={gameState.deck} firstCards={gameState.firstCards} onFoundSet={handleFoundSet} setOpenGameEnd={setOpenGameEnd} />

                {/* right panel */}
                <Scoreboard score={foundSets.length} time={time} setOpenNewGame={setOpenNewGame} setOpenGoHome={setOpenGoHome} />
                <NewGameModal open={openNewGame} setOpen={setOpenNewGame} onStartNewGame={startNewGame} />
                <GameEndModal open={openGameEnd} setOpen={setOpenGameEnd} onStartNewGame={startNewGameCompleted} />
                <GoHomeModal open={openGoHome} setOpen={setOpenGoHome} onStartNewGame={startNewGame} />
            </div>
        </div>
    );
}

export default SetPage;
