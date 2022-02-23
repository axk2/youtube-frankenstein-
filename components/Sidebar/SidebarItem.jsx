import css from "styled-jsx/css"


const Row = css`
.Row {
    display: flex;
    align-items: center;
    padding: 10px 20px;
}

.Row:hover {
    background-color: lightgray;
    cursor: pointer;
}

.Row:hover .Icono {
    color: red;
}
`


const Icono = css`
.Icono {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #606060;
    font-size: large !important;
}
`


const Titulo = css`
.Titulo {
    flex: 1;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 500;
}
`


export default function SidebarItem({Icon, title}) {


    return (
        <div className="Row">
            <style jsx>{Row}</style>
            <style jsx>{Icono}</style>
            <style jsx>{Titulo}</style>


            <div className="Icono">
                <Icon />
            </div>
            <h2 className="Titulo">{title}</h2>
        </div>
    )
}
