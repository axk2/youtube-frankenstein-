import css from 'styled-jsx/css'


export const Container = css`
.Container {
    width: 100%;
    padding: 10px 90px;
    background-color: #f9f9f9;
}

.Iframe {
    width: 100%;
    aspect-ratio: 16/9;
}

.info {
    padding-top: 30px;
    padding-left: 20px;
}

.info h2 {
    margin-bottom: 10px;
}

.visitas {
    color: #424242;
    margin-bottom: 10px;
}

.Descripcion {
    padding-left: 100px;
}

.canal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;
}

.canal-info {
    display: flex;
    align-items: center;
}

.canal-info img {
    border-radius: 100%;
    margin-right: 20px;
    max-width: 48px;
}

.datos p {
    color: #424242;
}

.Suscribirse {
    background-color: #cc0000;
    color: white;
    padding: 10px 16px;
}
`