import { CREATE_POKEMON, GET_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_TYPES } from "./actions"

const initialState = {
    getPokemons : [],
    getTypes : [],
    getPokemonByName : {},
    getPokemonById : {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POKEMONS:
            return {
                ...state,
                getPokemons: action.payload
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                getPokemonByName: action.payload
            }
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                getPokemonById: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                getTypes: action.payload
            }

        default:
            return state
    }
}

export default reducer