const axios = require('axios')
const {Pokemon} = require('../db')
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
            peso: final[i].weight,
            img: final[i].sprites.other.dream_world.front_default
        })

    }
    //console.log(filter)
    return filter;
}

const getPokemonApiByName = async  (name) => {
    let pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
    //console.log(pokemon)
    let pokemonFilter = {
        id: pokemon.id,
        nombre: pokemon.forms[0].name,
        vida: pokemon.stats[0].base_stat,
        ataque: pokemon.stats[1].base_stat,            //filtrando la informacion necesaria
        defensa: pokemon.stats[2].base_stat,
        velocidad: pokemon.stats[5].base_stat,
        altura: pokemon.height,
        peso: pokemon.weight,
        img: pokemon.sprites.other.dream_world.front_default
    }
    //console.log(pokemonFilter)
    return pokemonFilter
}
 
const getPokemons = async (req, res) => {
    try {
        
        const pokemones = await getPokemonesApi() //trayendo pokemones de la api
        res.send(pokemones)
    } catch (error) {
        console.log(error)
    }
}


const getPokemonByName = async(req, res) => {
    try {
        let {name} = req.query
        if(name){

            let pokemonDB = await Pokemon.findOne({where: {nombre: name}})
            if(!pokemonDB){
                let pokemonApi = await getPokemonApiByName(name)
                return res.send(pokemonApi)
            }
            return res.send(pokemonDB)
        } else return res.send(await getPokemonesApi())
 

        
    } catch (error) {
        res.send('No existe')
    }

}


module.exports = {
    getPokemons,
    getPokemonByName
} 