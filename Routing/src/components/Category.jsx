import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"



export default function Category(){

    const [apiData, setApiData] = useState([])
    const {slug} = useParams()

    const getSingleData = async()=>{
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${slug}`)
        const data = await response.json()
        setApiData(data)
    }

    console.log(apiData)

    useEffect(()=>{
        getSingleData()
    }, [slug])

    return (
    <main>
    <h1>{apiData?.name}</h1>
    <section>
        <h2>Bilder</h2>
        <img src={apiData?.sprites?.front_default} alt={apiData?.name}/>
    </section>
    </main>
    )
}