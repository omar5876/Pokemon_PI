
const {Router} = require('express')
const { getPokemons, getPokemonByName, getPokemonById, postPokemon } = require('../controllers/pokemonControllers')

const router = Router()



router.get('/', getPokemons)
router.get('/nombre', getPokemonByName)
router.get('/:id', getPokemonById)
router.post('/', postPokemon)


module.exports = router