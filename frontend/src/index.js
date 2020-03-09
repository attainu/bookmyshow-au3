import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home/App';
import Notfound from "./pages/notfound"
import Theatre from "./pages/theatre/theatre"
import Seatmap from "./pages/seatmap/seatmap"
import Ticket from "./pages/ticket/ticket"
import './index.scss';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './store/store';
const routing = (
  <StateProvider>
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={App} />
        <Route path="/theatre/:name" component={Theatre} />
        <Route path="/seatmap" component={Seatmap} />
        <Route path="/ticket" component={Ticket} />
        <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
    </StateProvider>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
