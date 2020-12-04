import React, { Component } from 'react';
import PersonCard from './PersonCard';

class People extends Component {
    state = {
        peopleList: null
    }

    async componentDidMount() {
        let res = await fetch('https://ghibliapi.herokuapp.com/people');
        let peopleList = await res.json();
        this.setState({ peopleList });
    }

    render() {
            return (
                <>
                    {this.state.peopleList?.map(person => {
                        return <PersonCard key={person.id} {...person} />
                    })}
                </>
            );
    }
}

export default People;