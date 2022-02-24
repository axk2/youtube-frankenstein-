import css from 'styled-jsx/css'


export const Navbar = css`
.Navbar {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    position: sticky;
    top: 0;
    z-index: 100;
}
`


export const Logo = css`
.Logo {
    height: 25px;
    object-fit: contain;
    margin-left: 10px;
}
`


export const Left = css`
.Left {
    
}
`


export const Input = css`
.Input {
    display: flex;
    align-items: center;
    width: 40%;
    border: 1px solid black;
}


.Input > input {
    flex: 1;
    border: none;
}

.Input input:focus {
    outline: none;
    padding-left: 20px;
}

.Input .SearchIcon {
    width: 50px !important;
    border-left: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}
`


export const Icons = css`
.Icons {
    display: flex;
    align-items: center;
}
`