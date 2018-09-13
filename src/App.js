import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import More from './views/More';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <div className="col-lg-12">
          <ul className="list-inline">
              <li className="list-inline-item"><Link to={'/'}>Home</Link></li>
              <li className="list-inline-item"><Link to={'/More'}>More</Link></li>
          </ul>
          </div>     
        </header>
        <div className="App-content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/More' component={More} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
