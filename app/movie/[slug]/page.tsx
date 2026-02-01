"use client"
import Movie from "../../components/Movie"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
import EpisodeCard from "../../components/Episodecard";
import SeasonCard from "../../components/Seasonselect";
import Video from "../../components/Video";
import {useRouter} from "next/navigation";;
import Loading from "../../components/Loading";


function movies() {
    const router = useRouter()
    const [moviedata, setMoviedata] = useState([])
    const params = useParams();
    const [chSeries, Setcheries] = useState("")
    const [data_id, setData_id] = useState(null)
    const [movieurl, setMovieurl] = useState("")
    const [episodeName, setEpisodeName] = useState("")
    const decoded = decodeURIComponent(String(params.slug));
    const encoded = encodeURIComponent(decoded);
    const [confirmation, setConfirmation] = useState(false);
    const [delstate, setDelstate] = useState(false);
    const [loading, setLoading] = useState(true)
    //   console.log(encoded, "encoded")



    const movepost = async () => {

        try {
            const data = await fetch(`/api/moviefiles/?name=${encoded}`, { method: "GET", cache: "no-cache" })
            const res = await data.json()
            // console.log(res, "fetching data")
            const filteredData = res.filter((data: any) => data.season == "SEASON 1")
           
            setMoviedata(res)
            setLoading(false)

        }


        catch (e) {
            console.log(e, "fetching data error")
        }
    }
    useEffect(() => {
        Setcheries("SEASON 1")
        movepost()
        const es = new EventSource("/api/autofresh/" )

    es.onmessage = (e) => {
      const change = JSON.parse(e.data)
      console.log("DB changed:", change)
      window.location.reload()
    }

    
    }, [])
    const selectedSeason = (season: any) => {
        // console.log(season, "season")
        const filteredData = moviedata.filter((data: any) => data.season == season)
        // console.log(filteredData, "moviedata")
        Setcheries(season)
    }
    const getdata = (url: any, episodeName: string) => {

        //  console.log(url, "data[0]")
        // console.log(episodeName, "data[1]")
        setMovieurl(url)
        setEpisodeName(episodeName)
    }



    return (
        <section className="bg-black">
            <div className="p-5 bg-black text-red-600 text-center text-captialize text-4xl font-bold tezt-glow font-stretch-90%">

                <p>SERIES NAME:{decoded}</p>
            </div>

            <div>
                <Video MovieLink={movieurl} episodename={episodeName} />
            </div>
            

            {/* Season Selector - Extract unique seasons */}
            <div className="bg-black">
                <SeasonCard
                    season={[...new Set(moviedata.map((data: any) => data.season))]} //doubt in that
                    onSeasonChange={selectedSeason}
                />
            </div>

            <div className="text-center  bg-black p-5 text-2xl font-bold text-4xl lg:text-3xl xl:text-6xl  text-white"><p>The episodes </p></div>
            <div className="flex flex-wrap gap-5 p-5">
                {moviedata.map((desp:any) => {
                    return <EpisodeCard key={desp._id}  id={desp._id} descri={desp.describe}  senddata={getdata} selectseries={chSeries} series={desp.season} episodeName={desp.episodename} imageUrl={desp.imageUrl} createdAt={desp.createdAt} movieurl={desp.MovieLink} />
                })}

            </div>
            {loading ? <Loading /> : null}

        </section>
    )
}
export default movies
