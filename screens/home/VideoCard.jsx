import Avatar from '@material-ui/core/Avatar'
import css from "styled-jsx/css"
import { useSelector } from "react-redux"


export const Card = css`
.Card {
    margin-bottom: 40px;
    width: 270px;
}
`


const Portada = css`
.Portada {
    height: 140px;
    width: 250px;
}
`


const VideoInfo = css`
.VideoInfo {
    display: flex;
    margin-top: 10px;
    padding-right: 30px;
}

.VideoTexto {
    margin-left: 15px;
}

.VideoTexto > h4 {
    color: black;
    font-size: 14px;
    margin-bottom: 5px;
}

.VideoTexto > p {
    font-size: 14px;
    color: gray;
}

.ChannelAvatar {
    height: 30px !important;
    width: 30px !important;
}
`


const Dark = css`
.dark h4 {
    color: white !important;
}
`


const VideoCard = (props) => {
    const {
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage
    } = props


    const { theme } = useSelector((state) => state.themeReducer)


    return (
        <div className={`Card ${theme && "dark"}`}>
            <style jsx>{Card}</style>
            <style jsx>{Portada}</style>
            <style jsx>{VideoInfo}</style>
            <style jsx>{Dark}</style>


            <img className='Portada' src={image} alt="portada" />
            <div className="VideoInfo">
                <div className="ChannelAvatar">
                    <Avatar alt='channel' src={channelImage} />
                </div>
                <div className="VideoTexto">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard