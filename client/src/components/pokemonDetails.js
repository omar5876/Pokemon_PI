import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../redux/actions"

const PokemonDetails = () => {
    let {id} = useParams()
    let pokemon = useSelector(state => state.getPokemonById)
    let dispatch = useDispatch()
    console.log(pokemon)
    useEffect(()=>{
        dispatch(getPokemonById(id))
    }, [dispatch, id])
    return(
        <div>
            <h1>{pokemon.nombre}</h1>
            <img src={pokemon.img}></img>

        </div>
        
    )

}

export default PokemonDetails