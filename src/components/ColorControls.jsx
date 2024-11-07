const ColorControls = ({ time, onColorChange }) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return (
        <div>
            {/* centered card here */}
            <div className="grid grid-cols-1 gap-y-6">
                <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
                    <h1 className="text-4xl">
                        {hours}:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </h1>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-2xl">
                    <button className="bg-green-600 text-white rounded-lg p-2 hover:bg-green-700">
                        New Game
                    </button>
                    <button className="bg-gray-600 text-white rounded-lg p-2 hover:bg-gray-700">
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ColorControls