import Link from "next/link";
function timeAgo(date) {
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

    if (seconds < 60) return "just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return minutes + " minutes ago";

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + " hours ago";

    const days = Math.floor(hours / 24);
    if (days < 7) return days + " days ago";

    const weeks = Math.floor(days / 7);
    if (days < 30) return weeks + " weeks ago"; // < 30 days, never month

    const months = Math.floor(days / 30);
    if (days < 365) return months + " months ago"; // only after 30 days

    const years = Math.floor(days / 365);
    return years + " years ago";
}


const Movie = ({
    seriesName = "",
    releaseYear = "2024",
    imageUrl = "",
    uploadTimeAgo = "2025-12-20T16:19:28.266Z",
    data_id = "",
    type = "",

    link = "",
    description = "",

}) => {
    return (
        <div className="w-80 h-[480px] relative group">
            {/* 
                Outer container has fixed dimensions to preserve grid layout.
                Inner container handles the "pop-out" effect on hover.
            */}
            <div className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden bg-[#121214] border border-zinc-800/50 shadow-2xl transition-all duration-500 group-hover:z-50 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Link href={link} className="block">
                    {/* Image Section */}
                    <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={seriesName}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600">
                                <span className="text-sm font-black uppercase tracking-tighter">No Image</span>
                            </div>
                        )}

                        {/* NEW Badge */}
                        {uploadTimeAgo && Math.floor((Date.now() - new Date(uploadTimeAgo)) / (1000 * 60 * 60 * 24)) < 4 && (
                            <div className="absolute top-4 left-4 z-20">
                                <span className="bg-[#cc2b2b] text-white text-[10px] font-black px-2 py-1 rounded-sm shadow-lg tracking-wider">
                                    NEW
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                            <h2
                                className="text-[22px] font-black text-white group-hover:text-[#f82b2b] uppercase tracking-tighter leading-tight truncate transition-colors duration-300"
                                title={seriesName}
                            >
                                {seriesName}
                            </h2>
                            <span className="text-[10px] font-black text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/50">
                                {releaseYear}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#f82b2b] animate-pulse"></div>
                                <p className="text-[10px] font-black text-zinc-500 tracking-widest uppercase">
                                    {timeAgo(uploadTimeAgo)}
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5 text-blue-500">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                                </svg>
                                <span className="text-[10px] font-black uppercase tracking-wider">SERIES</span>
                            </div>
                        </div>

                        {/* Description Pop-out on Hover */}
                        <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 ease-in-out overflow-hidden">
                            <div className="flex gap-3">
                                <div className="w-1 bg-[#f82b2b] shrink-0"></div>
                                <p className="text-[10px] font-bold text-zinc-500 leading-relaxed uppercase tracking-wide">
                                    {description || `The series designed to give more things done more things for us they came to suppress us.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Action Buttons */}

            </div>
        </div>
    );
}

export default Movie;