import { Link } from 'react-router-dom'
const PokemonCard = ({ id, nombre, img, tipos }) => {
    return (
        <div>
            <Link to={`/${id}`}>
                <h2>{nombre}</h2>
                <img src={img}></img>
                <div>{tipos?.map((e, key) => <div key={key}>{e}</div>)}</div>
            </Link>
        </div>
    )
}

export default PokemonCard