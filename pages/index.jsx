import { memo } from "react"
import Header from "../components/Header"
import css from 'styled-jsx/css'
import Sidebar from '../components/Sidebar'
import RecommendedVideos from '../screens/home/RecommendedVideos'


const App = css`
.APP {
    display: flex;
}
`


export default memo(() => (
    <div>
        <style jsx>{App}</style>

        <Header />
        
        <div className="APP">
            <Sidebar />
            <RecommendedVideos />
        </div>
    </div>
))
