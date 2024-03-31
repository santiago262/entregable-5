import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import ListPokemos from '../pokemosPages/ListPokemos'
import SelectType from './SelectType'
import ButtonPages from './ButtonPages'

export default function PokedexPages() {
  const inputSearch=useRef()
  const [pokeSherch, setPokeShert] = useState("")
  const trainer=useSelector(state=>state.trainer)
  const [selectType, setSelectType] = useState("All Pokemons")
  const [number, setNumber] = useState({
    start:0
  })
  
  const url =`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${number.start}`
  console.log(url)
  const [pokemo,getPokemon,getPokemonType]=useFetch(url)
    useEffect(()=>{
        if(selectType==="All Pokemons"){
          getPokemon()
        }else{
          getPokemonType(selectType)
        }
    },[selectType,url])
    const handleSumit=(e)=>{ 
    e.preventDefault()
   
    setPokeShert(inputSearch.current.value.trim().toLowerCase())
    
    }
    const pokemonsFiltered= pokemo?.results.filter(poke=>{ 
      return poke.name.includes(pokeSherch)})
  return (
    <div className='poke-page'>
         <div className="logo-container">
            <img src="logo.svg" alt="" className="logo-img" />
            <p className="trainer-text">Welcome Trainer {trainer}</p>
        </div>
      <div className='container-search'>
        
        <form className="input-group"onSubmit={handleSumit}>
          <input className="input" ref={inputSearch}type="text" />
          <button className='button--submit'>Search</button>
        </form>
        <SelectType setSelectType={setSelectType}></SelectType></div>
        <ListPokemos pokemons={pokemonsFiltered}/>
        <ButtonPages start={number.start}  setNumber={setNumber}></ButtonPages>
        
    </div>
  )
}
