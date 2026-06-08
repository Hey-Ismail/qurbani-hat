import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">

            <h1 className="text-8xl font-extrabold text-green-700">
                404
            </h1>

            <h2 className="mt-4 text-3xl font-bold text-gray-800">
                Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-gray-500">
                <p className="mt-3 max-w-md text-gray-500">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
            </p>

            <Link href="/">
                <button className="mt-8 rounded-xl bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800">
                    Back to Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound;