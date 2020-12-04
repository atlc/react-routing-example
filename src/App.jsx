import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmDetail from './components/films/FilmDetail';
import Films from './components/films/Films';
import Navbar from './components/Navbar';
import People from './components/people/People';
import PersonDetail from './components/people/PersonDetail';


export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={() => <h1>Hello from home!</h1>} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/details/:filmid" component={FilmDetail} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/details/:personid" component={PersonDetail} />
                        <Route path="*" component={() => <h1>404! No route found!</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};