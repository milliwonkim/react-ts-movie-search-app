import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import Login from './components/Login';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Movies} />
                <Route path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
