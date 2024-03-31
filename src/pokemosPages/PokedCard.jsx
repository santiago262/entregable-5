import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import getColorByType from '../hooks/getColorByType'

export default function PokedCard({poke}) {
   const [pokemon,getPokemon] =useFetch(poke.url)
   
   useEffect(()=>{
    getPokemon()
   },[])

   const navigate=useNavigate()
   const handlePokeDetail=()=>{
    navigate("/pokedex/"+poke.name)
   }
   useEffect(() => {
    if (pokemon) {
        getColorByType(pokemon.types?.[0]?.type?.name, pokemon?.id);
    }
}, [pokemon]);

   
  return (
  <>
  <div className="card" id={pokemon?.id} onClick={handlePokeDetail}>
    <div className="card-image">
      <img className="card-imge-poke"
      src={pokemon?.sprites.other['official-artwork'].front_default} 
      alt="" 
      />
      </div>

    <div className="category"> <h3>{pokemon?.name}</h3> </div>
    <div className="heading">
       <ul className='type-ul'>
          {
            pokemon?.types.map(typeInfo => (
              <li className='type-li' key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <hr className="card-divider" /> 

        <ul>
          <li>
            <img className="svg-icon" src="heart-angle-svgrepo-com.svg" alt="" /> {pokemon?.stats[0].base_stat}
          </li>
          <li>
          <img className="svg-icon" src="spinning-sword-svgrepo-com.svg" alt="" /> {pokemon?.stats[1].base_stat}
          </li>
          <li>
          <img className="svg-icon" src="shield-alt-1-svgrepo-com.svg" alt="" /> {pokemon?.stats[5].base_stat}
          </li>
          <li>
          <img className="svg-icon" src="speed-test-svgrepo-com.svg" alt="" /> {pokemon?.stats[5].base_stat}
          </li>
        </ul>
        

    </div>
</div>
  </>
  )
}
