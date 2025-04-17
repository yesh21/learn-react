const StatsContainer = () => {
    return (
<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-zinc-100">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
            <p className="text-6xl font-bold text-blue-400">70%</p>
            <p className="mt-4 text-lg text-gray-700">of SMEs are certified across key domains such as technology, finance, healthcare, manufacturing, and more.</p>
        </div>
        <div className="text-center md:text-left">
            <p className="text-6xl font-bold text-blue-900">200+</p>
            <p className="mt-4 text-lg text-gray-700">successful projects delivered worldwide have earned us an average client satisfaction rating of 4 out of 5.</p>
        </div>
        <div className="text-center md:text-left">
            <p className="text-6xl font-bold text-blue-400">7-10Y</p>
            <p className="mt-4 text-lg text-gray-700">of our SME's average experience to the table, spanning diverse verticals and technologies.</p>
        </div>
        <div className="text-center md:text-left">
            <p className="text-6xl font-bold text-blue-900">20+</p>
            <p className="mt-4 text-lg text-gray-700">recognized industry leaders who have shaped trends and best practices in their fields.</p>
        </div>
    </div>
</div>    );
};


export default StatsContainer;