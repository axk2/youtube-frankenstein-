import Link from "next/link"
import Avatar from '@material-ui/core/Avatar'
import { 
    Search, 
    Menu,
    VideoCall,
    Apps,
    Notifications
} from "@material-ui/icons"
import {
    Icons,
    Input,
    Left,
    Logo,
    Navbar
} from './styles'


export default function Header() {


    return (
        <div className='Navbar'>
            <style jsx>{Navbar}</style>
            <style jsx>{Logo}</style>
            <style jsx>{Left}</style>
            <style jsx>{Input}</style>
            <style jsx>{Icons}</style>


            <div className="Left">
                <Menu />
                <Link href={"/"}>
                    <a>
                        <img className='Logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614" alt="logo" />
                    </a>
                </Link>
            </div>

            <div className="Input">
                <input type="text" />
                <div className='SearchIcon'>
                    <Search  />
                </div>
            </div>

            <div className="Icons">
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
