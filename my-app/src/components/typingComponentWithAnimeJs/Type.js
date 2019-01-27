import React, { Component } from 'react';
import './Type.css';

import anime from 'animejs';

export default class Type extends Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.divRef = React.createRef();
      this.state = {
        txt: this.props.word,
        wordArr: []
      }
  }


  componentDidMount() {
    this.makeArr();
  }
  componentDidUpdate() {
    this.animeRef = anime({
      targets: this.arr,
      delay: anime.stagger(200),
      autoplay: true,
      loop: true,
      translateY: {
        value: [-10,0],
        easing: 'spring(1, 100, 5, 0)'
      },
      opacity: {
        value: 1,
        easing: 'spring(1, 100, 10, 0)'
      },
      scale: {
        value: 1.05,
        easing: 'spring(1, 100, 10, 0)'
      },
      easing: 'spring',
      direction: 'alternate',
    })
  }

  makeArr = () => {
    let tempArr = [];
    for(let i = 0; i < this.state.txt.length; i++) {
      tempArr.push(this.state.txt.substring(i, i+1));
    }
    this.setState({
      wordArr: tempArr
    }, ()=> {
      console.log('done!');
    })
  }

  backSpace = () => {
    this.animeRef = anime({
      targets: this.arr,
      direction: 'reverse',
      delay: anime.stagger(20),
      autoplay: true,
      loop: true,
    })
  }

  render() {
    return(
      <div id="typeContainer" ref={this.divRef}>
        {
          this.state.wordArr.map((i, index) => {
            return(<span key={index+""} ref={(inp) => {this.arr.push(inp);}} className="typeLetters">{i}</span>)
          })
        }
      </div>
    )
  }

}
