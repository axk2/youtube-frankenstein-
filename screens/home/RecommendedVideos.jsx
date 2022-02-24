import Link from "next/link"
import css from "styled-jsx/css"
import VideoCard from "./VideoCard"
import { VideoApi } from '../../data/videos'
import { useSelector } from "react-redux"


const Videos = css`
.Videos {
    flex: 0.83;
    background-color: #f9f9f9;
    padding: 40px 20px;
    padding-bottom: 0;
}


.Videos > h2 {
    margin-left: 5px;
    margin-bottom: 20px;
}
`


const Lista = css`
.Lista {
    display: flex;
    flex-wrap: wrap;
}
`


const Dark = css`
.dark {
    background-color: #181818 !important;
    color: white !important;
}
`


export default function RecommendedVideos() {
    const { theme } = useSelector((state) => state.themeReducer)


    return (
        <div className={`Videos ${theme && "dark"}`}>
            <style jsx>{Videos}</style>
            <style jsx>{Lista}</style>
            <style jsx>{Dark}</style>

            
            <h2>Recommended</h2>
            <div className="Lista">
                {VideoApi.map(({
                    id,
                    image,
                    title,
                    channel,
                    views,
                    timestamp,
                    channelImage
                }) => {
                    return (
                        <div key={id}>
                            <Link href={`/videos/${id}`}>
                                <a>
                                    <VideoCard 
                                        title={title}
                                        views={views}
                                        timestamp={timestamp}
                                        channelImage={channelImage}
                                        channel={channel}
                                        image={image}
                                    />
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
