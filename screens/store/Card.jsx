import { memo } from "react"
import css from 'styled-jsx/css'
import { Star } from "@material-ui/icons"


const Card = css`
.Card {
    width: 270px;
    background-color: white;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.Card img {
    width: 180px;
}

.info {
    width: 180px;
}

.info h4 {

}

.estrella {
    color: #f5961d;
}

.estrella:last-child {
    margin-right: 5px;
}

.puntuacion {
    font-size: 12px;
    display: flex;
    align-items: center;
    flex-direction: row;
}
`


export default memo(({
    image,
    title,
    rating
}) => {
    const calificacion = parseInt(rating.rate)
    const estrellas = Array(calificacion).fill(0)

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
