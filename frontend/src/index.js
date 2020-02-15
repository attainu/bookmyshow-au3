import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notfound from "./notfound"
import Theatre from "./theatre"
import Seatmap from "./seatmap"
import './index.scss';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={App} />
        <Route path="/theatre" component={Theatre} />
        <Route path="/seatmap" component={Seatmap} />
        <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
