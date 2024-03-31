import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LinearProgress from '@mui/material/LinearProgress';
import getColorByType from '../hooks/getColorByType';

const linearProgressStyles = {
  width: "200px",
  height: "12px",
  borderRadius: 10,
  backgroundColor: '#e0e0e0',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#efb810',
  }
};

const PokeStat = ({ name, base_stat }) => (
  <div className='state'>
    <h4>{name}</h4>
    <LinearProgress variant="determinate" value={base_stat / 150 * 100} sx={linearProgressStyles} />
    <p>{base_stat}/150</p>
  </div>
);

const PokeDetails = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);
  useEffect(() => {
    if (pokemon) {
        getColorByType(pokemon.types?.[0]?.type?.name, pokemon?.id);
    }
}, [pokemon]);

  console.log(pokemon);

  return (
    <div className='pokemon-details'>
      {pokemon && (
        <><div className='pokemon'>
          <div id={pokemon?.id}> 
          <img src={pokemon.sprites.front_default} className='img-poke' alt={pokemon.name} /></div>
          <h2>{pokemon.name}</h2>
          <div className='stats-container'>
            <PokeStat name="HP" base_stat={pokemon.stats[0].base_stat} />
            <PokeStat name="Attack" base_stat={pokemon.stats[1].base_stat} />
            <PokeStat name="Defending" base_stat={pokemon.stats[2].base_stat} />
            <PokeStat name="Speed" base_stat={pokemon.stats[3].base_stat} />
          </div>
          <div className='physical'>
            <p>Base Experience <br />{pokemon.base_experience}</p>
            <p>Height <br />{pokemon.height}</p>
            <p>Weight <br />{pokemon.weight}</p>
          </div>
          <div className='poke-info'>
            <div className='info'>
              <h3>Abilities</h3>
              <ul>
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className='info'>
              <h3>Types</h3>
              <ul>
                {pokemon.types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </div>
          </div>  </div>
          <div className='moves'>
            <h3>Moves:</h3>
            <ul className='move-ul'>
              {pokemon.moves.map((move, index) => (
                <li className="move-li" key={index}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PokeDetails;