import { Link } from 'react-router-dom';

const PersonCard = (props) => {

    const { name, id, age, gender, hair_color, eye_color } = props;

    
    return (
        <div className="card shadow-lg text-center my-2">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <p className="card-text">{name} is a {age} year old {gender} with {hair_color} hair and {eye_color} eyes.</p>
                <Link className="btn btn-danger" to={`/people/details/${id}`}>See my details here!</Link>
            </div>
        </div>
    );
}

export default PersonCard;