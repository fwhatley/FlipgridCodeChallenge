import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './pages/sign.up/sign.up';
import SignUpConfirmation from './pages/sign.up.confirmation/sign.up.confirmation';

import './app.css';

function App() {

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact component={SignUp}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/sign-up-confirmation" component={SignUpConfirmation}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
