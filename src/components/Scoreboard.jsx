const Scoreboard = ({ time, score, setOpenNewGame, setOpenGoHome }) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    const openNewGameModal = () => {
        setOpenNewGame(true);
    };

    const openGoHomeModal = () => {
        setOpenGoHome(true);
    }

    return (
        <div className="col-span-1 m-auto order-1 xl:order-3 lg:col-span-4 xl:col-span-1">
            {/* centered card here */}
            <div className="grid grid-cols-1 xl:grid-cols-1 md:grid-cols-2">
                <div className="bg-white py-8 px-16 rounded-lg shadow-2xl text-center">
                    <h1 className="text-4xl mb-2">
                        {hours}:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </h1>
                    <h1><b>Score: </b>{`${score}`}</h1>
                </div>
                <div className="flex gap-4 m-4 bg-white p-6 rounded-lg shadow-2xl">
                    <button onClick={openNewGameModal} className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700">
                        New Game
                    </button>
                    <button onClick={openGoHomeModal} className="bg-gray-600 text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard