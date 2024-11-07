import React, { useRef, useState, useEffect } from 'react';
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

    const nodeInfo = {
        radius: 30,
        strokeWidth: 0.5,
        fill: 'red'
    }

    const [time, setTime] = useState(0);
    // need to pass this into the useEffect of the force graph
    // useEffect(() => {
    //     let intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    //     return () => clearInterval(intervalId);
    // }, []);


    const graphContainerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(1000);

    useEffect(() => {
        if (graphContainerRef.current) {
            setContainerWidth(graphContainerRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (graphContainerRef.current) {
                setContainerWidth(graphContainerRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='grid grid-cols-3 p-6 gap-6'>
            <div ref={graphContainerRef} className='col-span-2 flex items-center justify-center'>
                <ForceGraph
                    nodes={nodes}
                    links={links}
                    classes='rounded-lg shadow-2xl bg-white'
                    width={containerWidth}
                    height={600}
                    nodeInfo={nodeInfo}
                />
            </div>
            <div className='col-span-1 m-auto'>
                <ColorControls time={time} />
            </div>
        </div>
    );
};

export default ColorPage;
