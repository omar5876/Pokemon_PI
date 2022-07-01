import s from '../assets/Home.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clean, getPokemonByName, getPokemons, getTypes } from '../redux/actions'

import PokemonCard from './PokemonCard'
import Paginado from './Paginado'
const Home = () => {
    let [input, setInput] = useState('')

    const allPokemons = useSelector(state => state.getPokemons)
    const pokemon = useSelector(state => state.getPokemonByName)
    let types = useSelector(state => state.getTypes)
    const [paginaActual, setPaginaActual] = useState(1)
    const [pokemonesPorPagina, setPokemonesPorPagina] = useState(12)
    const indiceUltimoPokemon = paginaActual * pokemonesPorPagina; 
    const indicePrimerPokemon = indiceUltimoPokemon - pokemonesPorPagina
    const pokemonesPagina = allPokemons.slice(indicePrimerPokemon, indiceUltimoPokemon)

    const paginado = (pagActual) => {
        setPaginaActual(pagActual)
    }

    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const searchName = () => {
        dispatch(getPokemonByName(input))
        setInput('')
    }
    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getTypes())
        return dispatch(clean())
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
                <option value='todos'>Todos</option>
                <option value='creados'>Creados</option>
                <option value='api'>Api</option>
            </select>
            <select >
                {types.map(e => {
                    return (
                        <option key={e.id} value={e.nombre}>{e.nombre}</option>
                    )
                })}
            </select>
{ pokemon.nombre == undefined ?          ( 
    <div>
            <Paginado 
                pokemonesPorPagina={pokemonesPorPagina}
                numeroTotalPokemones={allPokemons.length}
                paginado={paginado}
                setPaginaActual={setPaginaActual}
                paginaActual={paginaActual}
                />
<div className={s.pokemonsContainer}>
            {pokemonesPagina&&pokemonesPagina.map(e=> {
                return (
                    <PokemonCard 
                        key={e.id}
                        id={e.id}
                        nombre={e.nombre}
                        img={e.img}
                        tipos={e.tipo}
                        />
                )
            })}
 
        </div>
 <Paginado 
     pokemonesPorPagina={pokemonesPorPagina}
     numeroTotalPokemones={allPokemons.length}
     paginado={paginado}
     />
     </div>
        )
        :(<PokemonCard id={pokemon.id} nombre={pokemon.nombre} img={pokemon.img} tipos={pokemon.tipo} />)
        }

{/*             {pokemon.nombre == undefined ? //renderizar todos lor pokemones, cunado no se haya hecho una busqueda
                (<Cards />)
                :
                (<PokemonCard id={pokemon.id} nombre={pokemon.nombre} img={pokemon.img} tipos={pokemon.tipo} />)
             } */}

        </div>
    )
}


export default Home