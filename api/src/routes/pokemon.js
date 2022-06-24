
const {Router} = require('express')
const { getPokemons, getPokemonByName, getPokemonById } = require('../controllers/pokemonControllers')

const router = Router()



router.get('/', getPokemons)
router.get('/:id', getPokemonById)
router.get('/nombre', getPokemonByName)



module.exports = router