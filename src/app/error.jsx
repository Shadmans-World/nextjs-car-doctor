"use client"

const Error = ({ error, reset }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
            <p className="text-lg text-gray-700 mb-8">{error.message || "An unexpected error occurred."}</p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
                Try Again
            </button>
        </div>
    );
};

export default Error;