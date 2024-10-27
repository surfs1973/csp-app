import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'

const ProfilePage = () => {
    const { id } = useParams();
    const profile = useLoaderData();

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Home
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <h1 className="text-3xl font-bold mb-4">
                                    {profile.name}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <i
                                        className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                    ></i>
                                    <p className="text-orange-700">
                                        <FaMapMarker className='inline text-lg mb-1 mr-1' />
                                        {profile.location}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Profile Description
                                </h3>

                                <p className="mb-4">
                                    {profile.description}
                                </p>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Statistics</h3>
                                <hr className="my-4" />
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Games Played</h3>
                                <p className="mb-4">{profile.total_games}</p>
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Total Sets</h3>
                                <p className="mb-4">{profile.total_sets}</p>
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Average Sets Per Game</h3>
                                <p className="mb-4">{(profile.total_sets/profile.total_games).toFixed(2)}</p>
                            </div>

                            {/* <!-- Manage --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Profile</h3>
                                <Link
                                    to={`/edit-profile/${id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Profile
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

const profileLoader = async ({ params }) => {
    const res = await fetch(`/api/profiles/${params.id}`);
    const data = await res.json();
    return data;
}

export { ProfilePage as default, profileLoader };