import React, { Component } from 'react';

import WaveyText from './components/wavingTextComponent/WaveyText.js';
import Typing from './components/typingTextComponent/Typing.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typing wordToType="Subscribe to VicyXCode!"/>
      </div>
    );
  }
}

export default App;
