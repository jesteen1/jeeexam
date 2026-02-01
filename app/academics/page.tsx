
"use client"

import { useRouter } from "next/navigation"

import Card from "../components/Card"
import { useEffect, useState } from "react"


import Movie from "../components/Movie"
import { NextResponse } from "next/server"
import Form from "../components/Form"

import Link from "next/link"
import TvShowIntro from "../components/Tvshow"

import Loading from "../components/Loading"

const PostPage = () => {
    const router = useRouter()
    const [data, setData] = useState([])
    const [data_id, setData_id] = useState(null)
    const [moviedata, setMoviedata] = useState([])
    const [confirmation, setConfirmation] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState(10);
    const [delstate, setDelstate] = useState(false)
    const [loading, setLoading] = useState(true)
    const seepost = async () => {

        try {
            const data = await fetch("/api/posts", { method: "GET", cache: "no-cache", headers: { secret: "peterparker" } })
            const res = await data.json()
            //   console.log(res, "fetching data")
            setData(res)
            setLoading(false)

        }

        catch (e) {
            console.log(e, "fetching data error")
        }
    }
    const movepost = async () => {

        try {
            const data = await fetch("/api/moviepost", { method: "GET", cache: "no-cache" })
            const res = await data.json()
            //    console.log(res, "fetching data")
            setMoviedata(res)
            setLoading(false)
        }

        catch (e) {
            console.log(e, "fetching data error")
        }
    }
    useEffect(() => {



        seepost()
        movepost()

    }, [])



    // console.log(data) adding data



    return (
        <section className="bg-black">

            {error == 404 ? <div className="bg-red-500 p-5 text-4xl  text-white text-center"> <p> server issue</p></div> : error == 200 ? <div className="bg-green-500 p-5 text-4xl  text-white text-center"> <p>updated sucessfull</p></div> : null}






            <div className="flex justify-center mb-3" >




            </div>
            {/* <div className="flex flex-wrap gap-5 p-5">
           
            {data.map((des) => {
                return <Card key={des._id} title={des.title} description={des.description} imageUrl={des.imageUrl} linkHref={""} />
            })}

        </div> */}
            <TvShowIntro />
            <div className="text-white ">
                <p className="hidden">ads display</p>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1969202616784990"
                ></script>

                <ins className="adsbygoogle inline-block w-[728] h-[90]"

                    data-ad-client="ca-pub-1969202616784990"
                    data-ad-slot="3989466372"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
            </div>
            <div className="text-center text-2xl font-bold text-4xl lg:text-3xl xl:text-6xl mt-10 text-white"><p>The series </p></div>



            <div className="flex flex-wrap gap-5 p-5 ">

                {moviedata.map((desp: any) => {
                    return <Movie link={`movie/${desp.seriesName}`} key={desp._id} data_id={desp._id} uploadTimeAgo={desp.createdAt} seriesName={desp.seriesName} releaseYear={desp.year} imageUrl={desp.imageUrl} description={desp.episodename} type={desp.type} />
                })}


            </div>


            {loading ? <Loading /> : null}

        </section>



    )
}
export default PostPage