import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ user, profile }) => {
    const location = useLocation();

    return (
        <>
            <section className="bg-indigo-700 p-3">
                <div className="flex justify-between items-center">
                    <div className="ml-2">
                        <Link
                            to={location.pathname !== "/set" ? "/" : "/set"}
                            className="text-lg text-white"
                        >
                            Constraint Satisfaction Problems
                        </Link>
                    </div>
                    {location.pathname === '/set' ? '' : <div className="mr-2">
                        <Link
                            to={`/profile/${user.uid}`}
                            className="text-lg text-white"
                        >
                            {profile.name}
                        </Link>
                    </div>}

                </div>
            </section>
        </>
    );
}

export default Navbar;
