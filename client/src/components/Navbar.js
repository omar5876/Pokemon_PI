import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div>
                <Link to={'/Home'}>
                <h2>Home</h2>
                </Link>
            </div>
            <div>
                <Link to={'/Create'}>
                <h2>Crear Pokemon</h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar