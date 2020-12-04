import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="col-6 shadow-lg flex m-3 border">
            <Link className="btn btn-outline-danger mx-2" to="/">Home</Link>
            <Link className="btn btn-outline-danger mx-2" to="/films">Films</Link>
            <Link className="btn btn-outline-danger mx-2" to="/people">People</Link>
        </div>
    )
}

export default Navbar;