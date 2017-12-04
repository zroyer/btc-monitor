import React, { Component } from 'react';
import LivePrice from './LivePrice';
import Footer from './Footer';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LivePrice />
        <Footer />
      </div>
    );
  }
}

export default App;