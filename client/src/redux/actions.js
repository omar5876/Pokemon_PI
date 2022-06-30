import axios from 'axios'
export const GET_POKEMONS = 'getPokemons'
export const GET_POKEMON_BY_NAME = 'getPokemonByName'
export const GET_POKEMON_BY_ID = 'getPokemonById'
export const GET_TYPES = 'getTypes'
export const CLEAN = 'clean'


export const getPokemons = () => {
    return async (dispatch) => {
        let pokemons = (await axios.get('http://localhost:3001/pokemon')).data
        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
    }
}

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        let pokemon = (await axios.get(`http://localhost:3001/pokemon/nombre?name=${name}`)).data
        return dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: pokemon
        })
    }
}

export const getPokemonById = (id) => {
    return async (dispatch) => {
        let pokemon = (await axios.get(`http://localhost:3001/pokemon/${id}`)).data
        return dispatch({
            type: GET_POKEMON_BY_ID,
            payload : pokemon
        })
    }
} 

export const getTypes = () => {
    return async (dispatch) => {
        let types = (await axios.get('http://localhost:3001/tipo')).data
        return dispatch({
            type: GET_TYPES,
            payload : types
        })
    }
}

export const clean = () => {
    return {
        type: CLEAN
    }
}



