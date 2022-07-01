import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clean, getPokemonById } from "../redux/actions"

const PokemonDetails = () => {
    let { id } = useParams()
    let pokemon = useSelector(state => state.getPokemonById)
    let dispatch = useDispatch()
    console.log(pokemon)
    useEffect(() => {
        dispatch(getPokemonById(id))
        return dispatch(clean())
    }, [dispatch, id])
    return (
        <div >
            <div>

                <h3>Nombre: {pokemon.nombre}</h3>
            </div>
            <div>

                <img src={pokemon.img}></img>
            </div>
            <div>
                <h3>Tipos:</h3>
                <ul>{pokemon.tipo?.map((e, k) => <li key={k}>{e}</li>)}</ul>
            </div>
            <h3>ID: {pokemon.id}</h3>
            <div>
                <h3>Estadisticas:</h3>
                <ul>
                    <li>Vida: {pokemon.vida}</li>
                    <li>Ataque: {pokemon.ataque}</li>
                    <li>Defensa: {pokemon.defensa}</li>
                    <li>Velocidad: {pokemon.velocidad}</li>
                </ul>
                <div>
                    <h3>Altura: {pokemon.altura}</h3>
                    <h3>Peso: {pokemon.peso}</h3>
                </div>
            </div>

        </div>

    )

}

export default PokemonDetails