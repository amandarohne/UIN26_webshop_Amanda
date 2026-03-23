import { useEffect } from "react"
import { useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"

export default function Category(){
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpriteImg] = useState([])
    const{ slug } = useParams()

    console.log("Denne kommer fra Category", apiEndpoint)

    const getSingleData = async()=>{
    const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
    const data = await response.json()
    setApiData(data)
    }

    console.log("Cat",apiData, apiEndpoint)

    console.log("Key values:", Object.keys(apiData?.sprites))

    useEffect(()=>{
        getSingleData()
        setSpriteImg(Object.keys(apiData?.sprites))
    }, [slug, apiEndpoint])

    console.log("mine bilder",spritesImg)

    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
              
                <img src={apiData?.sprites?.front_default + spritesImg?.map(item => item)} alt={apiData?.name} />
            </section>

        </main>
    )
}
