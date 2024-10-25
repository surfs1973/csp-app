import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const onHomeClick = (event) => {
        event.preventDefault();
        return navigate("/")
    }

    return (
        <>
            <section className="bg-indigo-700 py-3">
                <div className="mx-auto px-4 flex flex-col">
                    <div>
                        <a
                            href="/"
                            className="text-2xl text-white"
                            onClick={onHomeClick}
                        >
                            Constraint Satisfaction Problems
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;
