<<<<<<< HEAD
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Atv2 from './views/Atv2';
import MainPage from './views/MainPage';

function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/atividade-2' exact component={Atv2}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
=======
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Atv2 from './views/Atv2';
import MainPage from './views/MainPage';

function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/atividade-2' exact component={Atv2}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
>>>>>>> b93b3d58a017db4a6691477c908add7f1b784338
