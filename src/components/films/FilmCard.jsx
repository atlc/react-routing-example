import { Link } from 'react-router-dom';

const FilmCard = (props) => {

    const { title, id, director, description, release_date } = props;

    
    return (
        <div className="card shadow-lg text-center my-2">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
            <h5 className="card-title">Directed by {director}, released in {release_date}</h5>
                <p className="card-text">{description}</p>
                <Link className="btn btn-danger" to={`/films/details/${id}`}>See my details here!</Link>
            </div>
        </div>
    );
}

export default FilmCard;