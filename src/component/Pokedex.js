import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {loading,pokemons, page, setPage, total} = props;

    const lastIndex = () => {
        const lastPages = Math.max(page - 1, 0);
        setPage(lastPages);
    }

    const nextIndex = () => {
        const nextPages = Math.min(page + 1, total);
        setPage(nextPages)
    }
    return (
        <div>
            <div className="header">
                <h2>Pokedex</h2>
                <Pagination
                page={page+1}
                totalPages={total}
                onLeftclick={lastIndex}
                onRightClick={nextIndex}
                />
            </div>
            {loading ? 
            (<div className="text-pokemon">Cargando Pokemones</div>):
            (<div className="pokedex-grid">
            {pokemons.map((pokemon, idx) => {
                return <Pokemon pokemon={pokemon} key={pokemon.name}/>
            
            })}
        </div>)
            }
        </div>
    )
}

export default Pokedex;
