import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTypes } from "../redux/actions"

const CreatePokemon = () => {
    let tipos = useSelector(state => state.getTypes)
    console.log(tipos)
    let dispatch = useDispatch()
    const [input, setInput] = useState({
        nombre: '',
        vida: 0,
        ataque: 0,
        defensa: 0,
        velocidad: 0,
        altura: 0,
        peso: 0,
        imagen:'',
        tipo: []
    })
    const [error, setError] = useState({
        nombre: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        imagen: ''
    })

    useEffect(()=>{
        dispatch(getTypes())
    },[])
    return (
        <div>
            <form>
                <label htmlFor='nombre'>Nombre:</label>
                <input name='nombre' id='nombre'type={'text'} value={input.nombre}/>

                <label htmlFor='vida'>Vida:</label>
                <input name='vida' id='vida'type={'number'} value={input.vida}/>

                <label htmlFor='ataque'>Ataque:</label>
                <input name='ataque' id='ataque'type={'number'} value={input.ataque}/>

                <label htmlFor='defensa'>Defensa:</label>
                <input name='defensa' id='defensa'type={'number'} value={input.defensa}/>

                <label htmlFor='velocidad'>Velocidad:</label>
                <input name='velocidad' id='velocidad'type={'number'} value={input.velocidad}/>

                <label htmlFor='altura'>Altura:</label>
                <input name='altura' id='altura'type={'number'} value={input.altura}/>

                <label htmlFor='peso'>Peso:</label>
                <input name='peso' id='peso'type={'number'} value={input.peso}/>

                <label htmlFor='imagen'>Imagen:</label>
                <input name='imagen' id='imagen'type={'number'} value={input.imagen}/>

                <div>
                    <label>Tipos:</label>
                <select>
                    
                    {tipos&&tipos.map(e => {
                        return (
                            <option key={e.id} value={e.nombre}>{e.nombre}</option>
                        )
                    })}

                </select>
                </div>

            </form>
        </div>
    )
}

export default CreatePokemon