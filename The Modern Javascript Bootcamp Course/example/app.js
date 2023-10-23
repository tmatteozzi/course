async function getPokemon(){
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    console.log(pokemon.data.name);
}