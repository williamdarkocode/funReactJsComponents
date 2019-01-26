import React, { Component } from 'react';


import WaveyText from './components/wavingTextComponent/WaveyText.js';
import Typing from './components/typingTextComponent/Typing.js';
import WavingText from './components/wavingTextComponentWithAnimeJs/WavingText.js';
import Type from './components/typingComponentWithAnimeJs/Type.js';

import './App.css';



class App extends Component {
  render() {
    let text = "Hello, World!"
    return (
      <div className="App">
        {/*<WaveyText rippleText={text}/>*/}
        {/*<Typing wordToType={text}/>*/}
        {/*<WavingText wavingWord={text} />*/}
        <Type word={text}/>
      </div>
    );
  }
}

export default App;
