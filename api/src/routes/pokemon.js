
const {Router} = require('express')
const { getPokemons } = require('../controllers/pokemonControllers')

const router = Router()



router.get('/', getPokemons)


module.exports = router