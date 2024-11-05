const ColorControls = ({ time }) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return (
        <div>
            {/* centered card here */}
            <div className="grid grid-cols-1">
                <div className="bg-white py-8 px-16 rounded-lg shadow-2xl text-center">
                    <h1 className="text-4xl mb-2">
                        {hours}:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </h1>
                </div>
                <div className="flex gap-4 m-4 bg-white p-6 rounded-lg shadow-2xl">
                    <button className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700">
                        New Game
                    </button>
                    <button className="bg-gray-600 text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ColorControls