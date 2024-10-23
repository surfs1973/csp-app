import React, { useState, useEffect } from "react";

const Scoreboard = ({ score }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => setTime(time + 1), 10);
        return () => clearInterval(intervalId);
    }, [time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return (
        <div className="col-span-1 p-4 flex items-center justify-center order-1 md:order-3">
            {/* centered card here */}
            <div className="bg-white py-6 px-16 rounded-lg shadow-2xl text-center">
                <h1 className="text-4xl">
                    {hours}:{minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                </h1>
                <h1>{`Score ${ score }`}</h1>
            </div>
        </div>
    );
}

export default Scoreboard