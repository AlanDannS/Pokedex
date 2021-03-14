export const searchPokemon =async (pokemon) => {
    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
