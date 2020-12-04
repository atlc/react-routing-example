import React, { Component } from 'react';
import FilmCard from './FilmCard';

class Films extends Component {
    state = {
        filmsList: null
    }

    async componentDidMount() {
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let filmsList = await res.json();
        this.setState({ filmsList });
    }

    render() {
            return (
                <>
                    {this.state.filmsList?.map(film => {
                        return <FilmCard key={film.id} {...film} />
                    })}
                </>
            );
    }
}

export default Films;