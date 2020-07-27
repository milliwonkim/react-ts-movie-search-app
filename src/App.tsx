// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from './config/AppContext';
import Navbar from './components/Navbar';
import Home from './Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    const { dispatch, auth } = useContext(AppContext);

    return (
        <BrowserRouter>
            <Navbar auth={auth} dispatch={dispatch} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
