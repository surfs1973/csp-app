import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, profile }) => {
    return (
        <>
            <section className="bg-indigo-700 p-3">
                <div className="flex justify-between items-center">
                    <div className="ml-2">
                        <Link
                            to="/"
                            className="text-xl text-white"
                        >
                            Constraint Satisfaction Problems
                        </Link>
                    </div>
                    <div className="mr-2">
                        <Link
                            to={`/profile/${user.uid}`}
                            className="text-xl text-white"
                        >
                            { profile.name }
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;
