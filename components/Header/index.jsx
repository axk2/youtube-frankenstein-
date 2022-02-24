import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"
import css from "styled-jsx/css"
import Avatar from '@material-ui/core/Avatar'
import { ThemeDark, ThemeLight } from '../../state/theme/actions'
import { 
    Search, 
    Menu,
    VideoCall,
    Apps,
    Notifications,
    WbSunny,
    NightsStay
} from "@material-ui/icons"
import {
    Icons,
    Input,
    Left,
    Logo,
    Navbar
} from './styles'


const Light = css`
.N-Light {
    background-color: white;
}

.SRCH-Light {
    background-color: #fafafa;
    color: gray;
}
`


const Dark = css`
.N-Dark {
    background-color: rgba(33, 33, 33, 0.98);
    color: white;
}

.SRCH-Dark {
    background-color: hsl(0, 0%, 18.82%);
    color: gray;
}

.i-d {
    background: #121212;
}

.i-d input {
    background: #121212;
}
`


export default function Header() {
    const dispatch = useDispatch()
    const { theme } = useSelector((state) => state.themeReducer)


    return (
        <div className={`Navbar ${theme ? "N-Dark" : "N-Light"}`}>
            <style jsx>{Navbar}</style>
            <style jsx>{Logo}</style>
            <style jsx>{Left}</style>
            <style jsx>{Input}</style>
            <style jsx>{Icons}</style>
            <style jsx>{Dark}</style>
            <style jsx>{Light}</style>


            <div className="Left">
                <Menu />
                <Link href={"/"}>
                    <a>
                        <img className='Logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614" alt="logo" />
                    </a>
                </Link>
            </div>

            <div className={`Input ${theme && "i-d"}`}>
                <input type="text" />
                <div className={`SearchIcon ${theme ? "SRCH-Dark" : "SRCH-Light"}`}>
                    <Search  />
                </div>
            </div>

            <div className="Icons">
                {theme ? (
                    <WbSunny 
                        onClick={() => dispatch(ThemeLight())}
                    />
                ) : (
                    <NightsStay 
                        onClick={() => dispatch(ThemeDark())}
                    />
                )}
                <VideoCall />
                <Apps />
                <Notifications />
                <Avatar 
                    alt="Avatar"
                    src='https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png'
                />
            </div>
        </div>
    )
}
