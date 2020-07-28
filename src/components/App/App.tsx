import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Movie from '../Movie/Movie';
import { GlobalStyle } from './StyledApp';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:movieId' component={Movie} />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
};

export default App;
