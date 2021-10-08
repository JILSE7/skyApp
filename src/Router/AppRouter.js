import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Main from '../Views/Main';
import Reports from '../Views/Reports';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path ="/" component={Main}/>
                    <Route exact path ="/Reports" component={Reports}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
