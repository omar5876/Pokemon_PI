
const {Router} = require('express')
const { getPokemons, getPokemonByName } = require('../controllers/pokemonControllers')

const router = Router()



router.get('/', getPokemons)
router.get('/nombre', getPokemonByName)



module.exports = router