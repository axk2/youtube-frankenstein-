import { memo, useEffect, useState } from "react"
import { VideoApi } from '../../data/videos'
import { Container } from './styles'


export default memo(({id}) => {
    const [Video, setVideo] = useState({})


    useEffect(() => {
        VideoApi.filter((v) => { 
            if (v.id == id) setVideo(v)
        })
    }, [id])


    return (
        <div className="Container">
            <style jsx>{Container}</style>


            <iframe 
                className="Iframe"
                src={Video?.iframe}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />

            <div className="info">
                <h2>{Video?.title}</h2>
                <div className="visitas">{Video.views} vistas</div>
                <hr />
                <div className="canal">
                    <div className="canal-info">
                        <img src={Video.channelImage} alt="canal" />
                        <div className="datos">
                            <h4>{Video.channel}</h4>
                            <p>2.49 M de suscriptores</p>
                        </div>
                    </div>
                    <div className="Suscribirse">Suscribirse</div>
                </div>
                <p className="Descripcion">{Video.descripcion}</p>
            </div>


        </div>
    )
})
