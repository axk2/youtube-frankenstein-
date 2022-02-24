import { memo, useEffect, useState } from "react"
import css from 'styled-jsx/css'
import axios from "axios"
import Card from './Card'


const Container = css`
.Container {
    width: 100%;
    padding: 10px 20px;
    background-color: #f9f9f9;
    display: flex;
    flex-wrap: wrap;
}
`


export default memo(() => {
    const [Data, setData] = useState([])


    useEffect(() => {
        const LlamarApi = async () => {
            const data = await axios.get("https://fakestoreapi.com/products")
            setData(data.data)
            console.log(data.data)
            console.table(data.data)
        }
        LlamarApi()
    }, [])


    return (
        <div className="Container">
            <style jsx>{Container}</style>

            
            {Data.map(({
                id,
                title,
                price,
                description,
                category,
                image,
                rating
            }) => {
                return (
                    <Card 
                        key={id}
                        title={title}
                        image={image}
                        rating={rating}
                    />
                )
            })}
        </div>
    )
})
