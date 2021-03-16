export const searchPokemon = async (pokemon) => {
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

        const data = await respuesta.json();
        return data;
    } catch (error) {
    }
};

export const getPokemons = async (limit=25, offset=0) => {
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );

        const data = await respuesta.json();
        return data;
    } catch (error) {
    }
};

export const getPokemonData = async (url) => {
    try {
        const respuesta = await fetch(
            `${url}`
        );

        const data = await respuesta.json();
        return data;
    } catch (error) {
    }
};