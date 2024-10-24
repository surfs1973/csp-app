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
        <div className="col-span-1 flex items-center justify-center order-1 xl:order-3 lg:col-span-4 xl:col-span-1">
            {/* centered card here */}
            <div className="bg-white py-8 px-16 rounded-lg shadow-2xl text-center">
                <h1 className="text-4xl mb-2">
                    {hours}:{minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                </h1>
                <h1><b>Score: </b>{`${ score }`}</h1>
            </div>
        </div>
    );
}

export default Scoreboard