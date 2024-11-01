import { React, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoHomeModal from "./modals/GoHomeModal";

const Navbar = ({ user, profile }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [openGoHome, setOpenGoHome] = useState(false);
    const openGoHomeModal = (e) => {
        e.preventDefault();
        if (location.pathname === '/set') {
            setOpenGoHome(true);
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <section className="bg-indigo-700 p-3">
                <div className="flex justify-between items-center">
                    <div className="ml-2">
                        <button
                            onClick={openGoHomeModal}
                            className="text-lg text-white"
                        >
                            Constraint Satisfaction Problems
                        </button>
                    </div>
                    <div className="mr-2">
                        <Link
                            to={`/profile/${user.uid}`}
                            className="text-lg text-white"
                        >
                            {profile.name}
                        </Link>
                    </div>
                </div>
            </section>
            <GoHomeModal open={openGoHome} setOpen={setOpenGoHome} />
        </>
    );
}

export default Navbar;
