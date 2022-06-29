import {Link} from 'react-router-dom'
const InitialPage = () =>{
    return (
        <div>
            <Link to={'/Home'}>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default InitialPage