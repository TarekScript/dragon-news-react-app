import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">

            {/* Spinner */}
            <span className="loading loading-ring loading-lg text-base-content"></span>

            {/* Spacing */}
            <div className="mt-6 text-sm tracking-[0.3em] text-base-content opacity-60">
                LOADING
            </div>

        </div>
    );
};

export default LoadingPage;