import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import MainMenu from '../components/MainMenu';
import logo from '../logo.png';
import '../App.css';

// Component
class App extends Component {
  render () {
    return (
      <Router>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-info">
              <h1 className="App-title">Welcome!</h1>
              <MainMenu />
            </div>
          </header>
          <div>
            <Route exact path="/" render={() => (<Home params={this.props} />)} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;