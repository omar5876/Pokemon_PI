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
        const typesFilter = types.map(async (e) => await Tipo.create({nombre: e.name}))
        //console.log(typesFilter)
        await Tipo.bulkCreate(typesFilter)
        res.send('agregados')
        
    } catch (error) {
        console.log(error)
    }
    
}
getTypes()

module.exports = {
    getTypes,
}