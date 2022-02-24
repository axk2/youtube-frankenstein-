import { memo } from "react"
import css from "styled-jsx/css"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


const App = css`
.APP {
    display: flex;
}
`


export default memo(({children}) => {
    return (
        <div>
            <style jsx>{App}</style>

            <Header />
            
            <div className="APP">
                <Sidebar />
                {children}
            </div>
        </div>
    )
})
