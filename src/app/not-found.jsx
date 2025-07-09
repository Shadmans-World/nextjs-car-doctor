import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-9xl font-bold text-orange-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;