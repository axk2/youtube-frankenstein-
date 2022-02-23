import Link from "next/link"
import css from 'styled-jsx/css'
import SidebarItem from './SidebarItem'
import { 
    Home,
    Whatshot,
    Subscriptions,
    VideoLibrary,
    History,
    OndemandVideo,
    WatchLater,
    ThumbUpAltOutlined,
    ExpandMoreOutlined
} from '@material-ui/icons'


const Sideb = css`
.Sidebar {
    flex: 0.17;
}

a {
    text-decoration: none;
    color: black;
}

.sidebar > hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
}
`


export default function Sidebar() {


    return (
        <div className='Sidebar'>
            <style jsx>{Sideb}</style>
            
            <Link href="/">
                <a>
                    <SidebarItem title="Home" Icon={Home} />
                </a>
            </Link>

            <Link href="/store">
                <a>
                    <SidebarItem title="Store" Icon={Whatshot} />
                </a>
            </Link>
            <SidebarItem title="Subscription" Icon={Subscriptions} />

            <hr />

            <SidebarItem title="Library" Icon={VideoLibrary} />
            <SidebarItem title="History" Icon={History} />
            <SidebarItem title="Your videos" Icon={OndemandVideo} />
            <SidebarItem title="Watch Later" Icon={WatchLater} />
            <SidebarItem title="Liked videos" Icon={ThumbUpAltOutlined} />
            <SidebarItem title="Show more" Icon={ExpandMoreOutlined} />

            <hr />
        </div>
    )
}
