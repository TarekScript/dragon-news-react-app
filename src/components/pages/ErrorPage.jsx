import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-6">
            <div className="text-center text-white max-w-md">

                {/* 404 */}
                <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>

                {/* Message */}
                <h2 className="text-3xl font-bold mt-4">
                    Oops! Page not found
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-8 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg
                     hover:bg-indigo-100 hover:scale-105 transition duration-300"
                >
                    ⬅ Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;