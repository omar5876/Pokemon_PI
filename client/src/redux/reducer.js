import { GET_POKEMONS } from "./actions"

const initialState = {
    getPokemons : [],
    getTypes : [],
    getPokemonByName : {},
    getPokemonById : {},
    createPokemon: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POKEMONS:
            return {
                ...state,
                getPokemons: action.payload
            }

        default:
            return state
    }
}

export default reducer