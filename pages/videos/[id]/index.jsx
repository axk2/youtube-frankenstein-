import { memo } from "react"
import { useRouter } from 'next/router'
import Header from "../../../components/Header"
import css from 'styled-jsx/css'
import Sidebar from '../../../components/Sidebar'
import Video from '../../../screens/video'


const App = css`
.APP {
    display: flex;
}
`


export default memo(() => {
    const router = useRouter()
    const { id } = router.query


    return (
        <div>
            <style jsx>{App}</style>

            <Header />
            
            <div className="APP">
                <Sidebar />
                <Video id={id} />
            </div>
        </div>
    )
})
