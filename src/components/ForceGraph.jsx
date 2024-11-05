import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ForceGraph = ({ nodes, links }) => {
    const svgRef = useRef();
    let simulation; // Declare simulation in a higher scope

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', 600)
            .attr('height', 600);

        // Create a simulation
        simulation = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(-200))
            .force('link', d3.forceLink().id(d => d.id).distance(50))
            .force("center", d3.forceCenter(200, 200));

        // Create links
        const link = svg.selectAll('line.link')
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .attr("stroke", "black")
            .style("fill", "none");

        // Create nodes
        const node = svg.selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("r", 15)
            .attr("stroke", "green")
            .attr("stroke-width", 0.5)
            .style("fill", "red")
            .call(d3.drag() // Enable dragging
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // Update positions on each tick
        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        }

        // Start simulation
        simulation
            .nodes(nodes)
            .on("tick", ticked);

        simulation.force("link").links(links);

        // Cleanup on unmount
        return () => {
            simulation.stop();
            svg.selectAll("*").remove(); // Remove all elements
        };
    }, [nodes, links]);

    // Drag event handlers
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart(); // Accessing simulation here
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

    return (
        <svg ref={svgRef}></svg>
    );
};

export default ForceGraph;
