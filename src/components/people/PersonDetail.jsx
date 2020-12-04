import React, { Component } from 'react';
import PersonCard from './PersonCard';

class PersonDetail extends Component {
    state = {
        person: null
    }

    async componentDidMount() {
        let res = await fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.personid}`);
        let person = await res.json();
        this.setState({ person });
    }

    render() {
        if (this.state.person) {
            return (
                <PersonCard key={this.state.person.id} {...this.state.person} />
            );
        } else {
            return <h1>Loading person...</h1>
        }
    }
}

export default PersonDetail;