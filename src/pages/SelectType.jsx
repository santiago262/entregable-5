import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';


export default function SelectType({ setSelectType }) {
    const url = "https://pokeapi.co/api/v2/type";
    const [type, getType] = useFetch(url);
    useEffect(() => {
        getType();
    }, []);

    const handleChange = e => {
        setSelectType(e.target.value);
    };

    return (
        <div className="select-type-container">
            <select className="select-type" onChange={handleChange}>
                <option value="All Pokemons">
                    All Pokemons
                </option>
                {type?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))}
            </select>
        </div>
    );
}
