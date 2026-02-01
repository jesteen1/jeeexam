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



const scrolltoTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
const EpisodeCard = ({
    episodeName = "",
    id = "",
    imageUrl = "",
    series = "Series 1",
    selectseries = "Series 1",
    movieurl = "fff",
    senddata,
    descri,
    createdAt = "",

}) => {
    return (
        selectseries == series ? (
            <section>

                <div
                    className="w-80 rounded-2xl overflow-hidden bg-[#121214] border border-zinc-800/50 shadow-2xl transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
                >
                    {/* Image Section */}
                    <div
                        onClick={(e) => { senddata && senddata(movieurl, episodeName), scrolltoTop() }}
                        className="relative aspect-square w-full"
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={episodeName}
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-600 bg-zinc-900">
                                <span className="text-sm font-black uppercase tracking-tighter">No Image</span>
                            </div>
                        )}

                        {/* NEW Badge */}
                        {createdAt && Math.floor((Date.now() - new Date(createdAt)) / (1000 * 60 * 60 * 24)) < 4 && (
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#cc2b2b] text-white text-[11px] font-black px-2.5 py-1 rounded-sm shadow-lg tracking-wider">
                                    NEW
                                </span>
                            </div>
                        )}

                        <div className="absolute bottom-4 left-4">
                            <p className="text-white text-sm font-black tracking-tighter uppercase opacity-90 drop-shadow-md">
                                {series}
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col gap-2 relative">
                        <h3
                            className="text-lg font-bold text-[#f82b2b] uppercase"
                            title={episodeName}
                        >
                            {episodeName || "Unnamed Episode"}


                        </h3>
                        {episodeName.length <= 28 ? <br /> : null}
                        <div>  <p id="descri" className="absolute bottom-full left-0 w-full bg-zinc-900/95 backdrop-blur-sm p-4 text-[11px] font-bold text-zinc-400 leading-relaxed tracking-wide uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border-t border-white/10 shadow-lg z-20 empty:hidden">
                            {descri}
                        </p></div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f82b2b] animate-pulse"></div>
                            <p className="text-[11px] font-black text-zinc-500 tracking-widest uppercase">
                                {timeAgo(createdAt)}
                            </p>
                        </div>

                    </div>

                    {/* Action Footer */}

                </div>

            </section>
        ) : null

    );
}

export default EpisodeCard;
