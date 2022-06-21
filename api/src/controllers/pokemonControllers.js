const axios = require('axios')

const getPokemonesApi = async () => {
    const pokemones = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data.results //trayendo los pokemones
    const pokemonesFilter = pokemones.map(async (e) => {
        return (await axios.get(e.url)).data //trayendo la informacion del pokemon
    })
    
    const final = await Promise.all(pokemonesFilter) //resolviendo las promesas pendientes
    //console.log(final)
    const filter = []
    for(let i = 0; i < final.length; i++){
        filter.push({
            id: final[i].id,
            nombre: final[i].forms[0].name,
            vida: final[i].stats[0].base_stat,
            ataque: final[i].stats[1].base_stat,            //filtrando la informacion necesaria
            defensa: final[i].stats[2].base_stat,
            velocidad: final[i].stats[5].base_stat,
            altura: final[i].height,
            peso: final[i].weight
        })

    }
    //console.log(filter)
    return filter;
}
 
const getPokemons = async (req, res) => {
    const pokemones = await getPokemonesApi()
    res.send(pokemones)
}

module.exports = {
    getPokemonesApi,
    getPokemons
} 