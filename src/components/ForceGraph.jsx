import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Spinner from './Spinner';

const ForceGraph = ({ nodes, links, classes, width, height, nodeInfo }) => {
    const graphRef = useRef();
    const [loading, setLoading] = useState(true);
    const colors = ["red", "green", "blue", "orange"];
    let simulation;

    // update graph
    useEffect(() => {
        const svg = d3.select(graphRef.current)
            .attr('width', width)
            .attr('height', height);

        simulation = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(-(width / 3.5)))
            .force('link', d3.forceLink().id(d => d.id).distance(width / 6.67))
            .force("center", d3.forceCenter(width / 2, height / 2))

        const link = svg.selectAll('line.link')
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .attr("stroke", "black")
            .style("fill", "none");

        const node = svg.selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", nodeInfo.radius)
            .attr("stroke-width", nodeInfo.strokeWidth)
            .style("fill", nodeInfo.fill)
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended))
            .on("click", onclick);

        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            setLoading(false);
        }

        simulation
            .nodes(nodes)
            .on("tick", ticked);

        simulation.force("link").links(links);

        return () => {
            simulation.stop();
            svg.selectAll("*").remove();
        };
    }, [nodes, links]);

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    function onclick(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        // get color of cur node, find it in colors, then go pos + 1 on it
        const currentColor = d3.select(this).style("fill");
        const newColor = colors[(colors.indexOf(currentColor) + 1) % 4]
        d3.select(this).style("fill", newColor);
    }


    return (
        <div>
            {loading && <Spinner />}
            <svg ref={graphRef} className={classes}></svg>
        </div>
    );
};

export default ForceGraph;
