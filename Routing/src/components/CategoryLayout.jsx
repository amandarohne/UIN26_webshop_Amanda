import {Link, Outlet, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function CategoryLayout() {

const {slug} = useParams()
const [apiData, setApiData] = useState([])
const [apiEndpoint, setApiEndpoint] = useState()

const defaultApiUrl = 'https://pokeapi.co/api/v2/'

const getData = async()=>{
    const response = await fetch(defaultApiUrl)
    const data = await response.json()
    const {type, pokemon, item} = data

    setApiData({type, pokemon, item})

 }

    console.log("Sjekk", apiData)
    console.log("Denne kommer fra Layout", apiEndpoint)

    useEffect(()=> {
    getData()
    },[])

    return (
    <>
    <nav className="main-nav">
    {Object.keys(apiData)?.map((item) => <Link key={item+'-saj'} to={item} onClick={()=>setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}
    {/*apiData?.map((item) => <Link key={item.name+'-xt'} to={item.name} onClick={()=> setApiEndpoint(item.url)}>{item.name}</Link>)*/}
    </nav>
    <Outlet context={{apiEndpoint, defaultApiUrl, setApiEndpoint}} />
    </>
    )
}