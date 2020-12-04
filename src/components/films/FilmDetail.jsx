import React, { Component } from 'react';
import FilmCard from './FilmCard';

class FilmDetail extends Component {
    state = {
        film: null
    }

    async componentDidMount() {
        let res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.filmid}`);
        let film = await res.json();
        this.setState({ film });
    }

    render() {
        if (this.state.film) {
            return (
                <FilmCard key={this.state.film.id} {...this.state.film} />
            );
        } else {
            return <h1>Loading film...</h1>
        }
    }
}

export default FilmDetail;