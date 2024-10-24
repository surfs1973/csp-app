import React from 'react';

const Hero = () => {
    const onHomeClick = (event) => {
        event.preventDefault();
        const confirm = window.confirm('Are you sure you want to restart the game?');
        if (!confirm) return;
        window.location.reload();
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
                            Set Game
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
