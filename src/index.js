import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Pho from './items/pho'
import Com from './items/com'
import Bun from './items/bun'


import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/pho" component={Pho}/>
            <Route path="/com" component={Com}/>
            <Route path="/bun" component={Bun}/>

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
