import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = ({ text }) => {
    return (
        <div className="flex flex-col items-center mt-24">
            <ClipLoader 
                color='#4338ca'
                cssOverride={{
                    display: 'block',
                }}
                size={150}
            />
            <p className="mt-4 text-lg text-[#4338ca] font-medium">{text}</p>
        </div>
    );
};

export default Spinner;
