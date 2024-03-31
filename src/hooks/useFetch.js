import React, { useState } from 'react'
import axios from "axios"
export default function useFetch(url) {
const [responce, setResponce] = useState()
const getApi=()=>{
    axios.get(url).then(res=>setResponce(res.data)).catch(res=>console.log(res))

}
const getApiType=(urlType)=>{
    axios.get(urlType).then(res=>{
        const obj={
            results: res.data.pokemon.map(poke =>poke.pokemon)
        }
        setResponce(obj)
    }).catch(res=>console.log(res))
}
return [responce,getApi,getApiType]
}
