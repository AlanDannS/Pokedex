import React, {useState} from 'react';
import { searchPokemon } from '../Api/api';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();


    const onChange = (e) => setSearch(e.target.value);
    const onClick = async (e) =>{
        const data = await searchPokemon(search);
        setPokemon(data);
        console.log(data)
    };
    return (
        <div>
            <div>
                <input placeholder='Buscar Pokemon' onChange={onChange}></input>
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
            <div>
                {pokemon &&
                <div>
                    <div>Nombre: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default}/>
                </div>
                
                }
            </div>
        </div>
    )
}

export default SearchBar;
