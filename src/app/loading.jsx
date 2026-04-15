import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center leading-9">
                    <p className="text-5xl font-bold text-green-800">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default loading;