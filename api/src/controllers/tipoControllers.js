const axios = require("axios")
const {Tipo} = require("../db")

const getTypesapi = async () => {
    const types = (await axios.get('https://pokeapi.co/api/v2/type')).data.results
    //console.log(types)
    return types
    
}
const getTypes = async (req, res) => {
    try {
        const types = await getTypesapi()
        //console.log(types)
        const typesFilter = types.map((e) =>({nombre: e.name})) //obteniendo solo el nombre del tipo
        //console.log(typesFilter)
        await Tipo.bulkCreate(typesFilter) //gurdandolos en la DB

        const typesDB = await Tipo.findAll()  //trayendolos de la DB
        res.send(typesDB)
        
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = {
    getTypes,
}