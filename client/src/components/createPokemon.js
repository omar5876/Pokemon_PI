import { useState } from "react"

const CreatePokemon = () => {
    const [input, setInput] = useState({
        nombre: '',
        vida: 0,
        ataque: 0,
        defensa: 0,
        velocidad: 0,
        altura: 0,
        peso: 0,
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
        tipo: ''
    })
    return (
        <div>
            <form>
                <label for='nombre'>Nombre</label>
                <input name='nombre' type={'text'} value={error.nombre}/>
            </form>
        </div>
    )
}

export default CreatePokemon