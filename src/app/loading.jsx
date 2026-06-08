const Loading = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            {/* Global loading */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-200 border-t-green-700"></div>
        </div>
    );
};

export default Loading;