import React, {useState, useEffect} from 'react';
import { getPokemonData, getPokemons, searchPokemon } from './Api/api';
import Navbar from './component/Navbar';
import Pokedex from './component/Pokedex';
import SearchBar from './component/SearchBar'; 


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () =>{
    try {
      setLoading(true);
      const data = await getPokemons(24,24*page);
      const promises = data.results.map( async (pokemon)=>{
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false)
      setTotal(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearch = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
 

    if(!result){
      setNotFound(true);
      setLoading(false);
      return;
    }else{
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }

    setLoading(false);
  };

  return (
    <>
     <Navbar/>
     <SearchBar onSearch={onSearch}/>
     {notFound ? 
     (<div className="notFound text-pokemon">POKEMON NO LOCALIZADO</div>) :
     (
      <Pokedex 
        loading ={loading}
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
        />)
      }
    </>
  )
};

export default App;
