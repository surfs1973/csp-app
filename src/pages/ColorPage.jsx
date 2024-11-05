import React from 'react';
import ForceGraph from '../components/ForceGraph';

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

    return (
        <div>
            <h1>Force-Directed Graph</h1>
            <ForceGraph nodes={nodes} links={links} />
        </div>
    );
};

export default ColorPage;
