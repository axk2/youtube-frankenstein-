import css from 'styled-jsx/css'


export const Card = css`
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