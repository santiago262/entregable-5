import React from 'react'
import PokedCard from './PokedCard'

export default function ListPokemos({pokemons}) {
  
  return (
    <div className='card-container'>
        {
            pokemons?.map(pokemon=> (<PokedCard key={pokemon?.name}poke={pokemon}/>)
            )
        }
    </div>
  )
}
