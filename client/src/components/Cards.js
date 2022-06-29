import s from '../assets/Cards.module.css'
import { useSelector, useDispatch } from "react-redux"
import { getPokemons } from '../redux/actions'
import { useEffect } from 'react'
import PokemonCard from './PokemonCard'

const Cards = () => {

    const allPokemons = useSelector(state => state.getPokemons)

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getPokemons())
    }, [])

    return (
        <div className={s.cardsContainer}>
            {allPokemons&&allPokemons.map(e=> {
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
    )
}

export default Cards