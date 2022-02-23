import { memo, useEffect, useState } from "react"
import css from 'styled-jsx/css'
import axios from "axios"


const Container = css`
.Container {
    width: 100%;
    padding: 10px 90px;
    background-color: #f9f9f9;
}
`


export default memo(({id}) => {
    const [Video, setVideo] = useState({})


    useEffect(() => {
        const LlamarApi = async () => {
            const data = await axios.get("https://fakestoreapi.com/products")
            setData(data.data)
        }
        LlamarApi()
    }, [])

    console.log(Data)
    console.table(Data)

    return (
        <div className="Container">
            <style jsx>{Container}</style>



        </div>
    )
})
