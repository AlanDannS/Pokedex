import React from 'react'

const Pokemon = (props) => {
    const {pokemon} = props;
    return (
        <div className="pokemon-card">
            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default}
                alt={pokemon.name}/>
            </div>

            <div className="pokemon-datos">

                <div className="nombre">
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>

                <div className="pokemon-type">
                    {pokemon.types.map((type, idx)=>{
                        return (
                            <div className={type.type.name} key={idx}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokemon
