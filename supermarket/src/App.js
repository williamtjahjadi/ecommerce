import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from  './Home'
import About from  './About'
import shopnow from  './shopnow'
import Navbar from  './Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
      <Switch>
      <Route exact path="/"
        component={Home}
        />
      <Route exact path="/about"
        component={About}
        />
      <Route exact path="/shopnow"
        component={shopnow}
        />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
