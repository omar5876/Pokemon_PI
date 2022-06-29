import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonByName, getPokemons, getTypes } from '../redux/actions'
import Cards from './Cards'
import PokemonCard from './PokemonCard'
const Home = () => {
    let [input, setInput] = useState('')

    const pokemon = useSelector(state => state.getPokemonByName)
    let types = useSelector(state => state.getTypes)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const searchName = () => {
        dispatch(getPokemonByName(input))
    }
    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getTypes())
    }, [dispatch])
    return (
        <div>
            <input type={'text'} value={input} onChange={(e) => handleChange(e)} />
            <button onClick={searchName}>Buscar</button>
            <select>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
            <select>
                {types.map(e => {
                    return (
                        <option key={e.id} value={e.nombre}>{e.nombre}</option>
                    )
                })}
            </select>

            {pokemon && <PokemonCard id={pokemon.id} nombre={pokemon.nombre} img={pokemon.img} tipos={pokemon.tipo} />

            }
            <Cards />
        </div>
    )
}


export default Home