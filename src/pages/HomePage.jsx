import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {

    return (
        <section className="py-4">
            <div className="container m-auto">
                <div className="grid grid-cols-1 gap-4 p-4 rounded-lg">
                    <div className="p-6 rounded-lg shadow-md bg-gray-100">
                        <h2 className="text-2xl font-bold">Set</h2>
                        <p className="mt-2 mb-4">
                            A "set" consists of three cards where each attribute is either all the same or all different across the cards. 
                            Find as many valid sets as possible among the displayed cards.
                        </p>
                        <Link
                            to="/set"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                            Play
                        </Link>

                    </div>
                    <div className="p-6 rounded-lg shadow-md bg-indigo-100">
                        <h2 className="text-2xl font-bold">Graph Coloring</h2>
                        <p className="mt-2 mb-4">
                        Attempt to color the vertices of a graph such that no two adjacent vertices share the same color.
                        Use the fewest number of colors possible while following this rule.
                        </p>
                        <Link
                            to="/color"
                            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                            Play
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage
