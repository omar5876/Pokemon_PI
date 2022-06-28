const axios = require('axios')
const {Pokemon, Tipo, addTipo} = require('../db')

//-------------------------Funciones para traer la informacion------------------------------
const getPokemonesApi = async () => {
    const pokemones = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')).data.results //trayendo los pokemones
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
            img: final[i].sprites.other.dream_world.front_default,
            tipo: final[i].types.map(e => e.type.name)
        })

    }
    //console.log(filter)
    return filter;
}

const pok = getPokemonesApi() //almacenando los pokemones de la api en una variable

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
        img: pokemon.sprites.other.dream_world.front_default,
        tipo: pokemon.types.map(e => e.type.name)
    }
    //console.log(pokemonFilter)
    return pokemonFilter
}


const getPokemonApiById = async (id) => {
    let pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
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
        img: pokemon.sprites.other.dream_world.front_default,
        tipo: pokemon.types.map(e => e.type.name)
    }
    //console.log(pokemonFilter)
    return pokemonFilter

}


//----------------------------Funciones de las rutas------------------ 
const getPokemons = async (req, res) => {
    try {
        
        let pokemonesApi = await pok //trayendo pokemones de la api
        let pokemonesDB = await Pokemon.findAll({include: {model: Tipo, attributes: ['nombre']}}) //pokemones de la DB
        res.send([...pokemonesApi, ...pokemonesDB])
    } catch (error) {
        console.log(error)
    }
}


const getPokemonByName = async(req, res) => {
    let {name} = req.query
    //console.log(req.query)
    try {
        if(name){

            let pokemonDB = await Pokemon.findOne({where: {nombre: name}, include : Tipo})
            if(!pokemonDB){
                let pokemonApi = await getPokemonApiByName(name)
                return res.send(pokemonApi)
            }
            return res.send(pokemonDB)
        } else return res.send(await pok)
 

        
    } catch (error) {
        res.send('No existe name')
    }

}

const getPokemonById = async(req, res) => {
    let {id} = req.params
    let pokemonDB;
    //console.log(id)
    try {
        if(id){
            if(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(id)){

                pokemonDB = await Pokemon.findOne({where : {id: id}, include: Tipo})
                //console.log(pokemonDB)
            }
            if(!pokemonDB){
                let pokemonApi = await getPokemonApiById(id)
                //console.log(pokemonApi)
                return res.send(pokemonApi)
            }
            return res.send(pokemonDB)
        }
        else{
            return res.send(await pok)
        }

        
    } catch (error) {
         res.send( "No existe")
    }
}

const postPokemon = async(req, res) => {
    let {nombre, vida, ataque, defensa, velocidad, altura, peso, img, tipos} = req.body
    console.log(req.body)
    try {
        if(!nombre && !tipos.length) res.send("Faltan campos requeridos")

        let newPokemon = await Pokemon.create({nombre, vida, ataque, defensa, velocidad, altura, peso, img});
        //let type = await Tipo.findOne({where: {nombre: tipo}})
        //let newPokemon = await Pokemon.create({nombre, vida, ataque, defensa, velocidad, altura, peso/* , tipos : {nombre: tipo} */}/* , {include: [Tipo]} */);
        let types = tipos.map((async(e)=> await Tipo.findOne({where: {nombre: e}})))
        let typesPromise = await Promise.all(types)

        newPokemon.addTipos(typesPromise)
        //await Promise.all(addTypes)
        res.send(newPokemon)

    } catch (error) {
        console.log(error)
        res.send('No se pudo agregar')
    }
} 


module.exports = {
    getPokemons,
    getPokemonByName,
    getPokemonById,
    postPokemon
} 