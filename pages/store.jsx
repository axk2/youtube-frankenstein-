import { memo } from "react"
import Header from "../components/Header"
import css from 'styled-jsx/css'
import Sidebar from '../components/Sidebar'
import Store from "../screens/store"


const App = css`
.APP {
    display: flex;
}
`


export default memo(() => {
    return (
        <div>
            <style jsx>{App}</style>

            <Header />
            
            <div className="APP">
                <Sidebar />
                <Store />
            </div>
        </div>
    )
})
