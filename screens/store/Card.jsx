import { memo, useEffect, useState } from "react"
import { Star } from "@material-ui/icons"
import { Card } from "./style"


export default memo(({
    image,
    title,
    rating
}) => {
    const [estrellas, setEstrellas] = useState([])


    useEffect(() => {
        const calificacion = parseInt(rating.rate)
        const estrellasArr = Array(calificacion).fill(0)
        setEstrellas(estrellasArr)
    }, [])
    

    return (
        <div className="Card">
            <style jsx>{Card}</style>


            <img src={image} alt="item" />
            <div className="info">
                <h5>{title}</h5>
                {/* <p>{JSON.stringify(rating)}</p> */}
                <p className="puntuacion">
                    {estrellas.map(() => (
                        <span className="estrella">
                            <Star size="1" />
                        </span>
                    ))}  ({rating.count} reviews)
                </p>
                <p></p>
            </div>
        </div>
    )
})
