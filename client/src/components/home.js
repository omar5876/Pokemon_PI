import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/actions'
const Home = () => {
    const pokemons = useSelector(state => state.getPokemons)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    }, [])
    return (
        <div>
             home

        </div>
    )
}


export default Home