import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      fetchingData: false,
      siteData: {}
    }
  }

  render() {

    const {fetchingData} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>Out There</h1>
            {
              fetchingData ?
                <img src={logo} className="App-logo" alt="logo" />
              :
                <p>Content is up to date.</p>
            }

        </header>
      </div>
    );
  }
}

export default App;
