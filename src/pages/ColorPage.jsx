import { React, useState, useEffect } from 'react';
import ForceGraph from '../components/ForceGraph';
import ColorControls from '../components/ColorControls';

const ColorPage = () => {
    const nodes = [
        { id: "honda", class: "cars" },
        { id: "civic", class: "cars" },
        { id: "toyota", class: "cars" },
        { id: "corola", class: "cars" }
    ]

    const links = [
        { source: 'civic', target: 'honda' },
        { source: 'honda', target: 'toyota' },
        { source: 'toyota', target: 'corola' }
    ]

    const simSettings = {
        strength: -200,
        distance: 150
    }

    const nodeInfo = {
        radius: 30,
        stroke: 'black',
        strokeWidth: 0.5,
        fill: 'red'
    }

    const [time, setTime] = useState(0);
    // need to pass this into the useEffect of the force graph
    // useEffect(() => {
    //     let intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    //     return () => clearInterval(intervalId);
    // }, []);


    return (
        <div className='grid grid-cols-3 pt-12'>
            <div className='col-span-2 flex items-center justify-center border border-black'>
                <ForceGraph
                    nodes={nodes}
                    links={links}
                    classes='border border-black rounded-lg shadow-xl'
                    width={1000}
                    height={600}
                    nodeInfo={nodeInfo}
                    simSettings={simSettings}
                />
            </div>
            <div className='col-span-1 m-auto'>
                <ColorControls time={time} />
            </div>
        </div>
    );
};

export default ColorPage;
