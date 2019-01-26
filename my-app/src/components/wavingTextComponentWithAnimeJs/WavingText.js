import React, { Component } from 'react';
import './WavingText.css';

import anime from 'animejs';


export default class WavingText extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.spanRef = React.createRef();
    this.bounceLetters = this.bounceLetters.bind(this);
    this.refArr = [];
    this.state = {
      word: this.props.wavingWord,
      arr: [],
      arrRefs: []
    }
  }


  componentDidMount() {
    this.createArr();
    console.log(this.containerRef.current);
  }

  createArr = () => {
    let temp = [];
    for(let i = 0; i < this.state.word.length; i++) {
      temp.push(this.state.word.substring(i, i+1));
    }
    this.setState({
      arr: temp
    }, ()=> {
      console.log('done!');
    })
  }

  componentDidUpdate() {
    this.animeRef = anime({
      targets: this.refArr,
      keyframes: [{translateY: -90}, {translateY: 0}, {translateY: 15}, {translateY: 0}],
      autoplay: true,
      // delay: anime.stagger(50),
      //delay: anime.stagger(100, {from: 'center'}),
      delay: (el, i) => {
        return 50*i
      },
      loop: true,
      easing: 'easeInOutSine',
      backgroundColor: {
        value: ['#000', '#FFF'],
        easing: 'easeInOutSine'
      },
      color: {
        value: ['#FFF', '#000'],
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
    });
  }

  bounceLetters = (childNodeList) => {
    anime({
      targets: childNodeList,
      keyframes: [{translateY: -90}, {translateY: 0}, {translateY: 15}, {translateY: 0}],
      autoplay: true,
      // delay: anime.stagger(50),
      //delay: anime.stagger(100, {from: 'center'}),
      delay: (el, i) => {
        return 50*i
      },
      loop: true,
      easing: 'easeInOutSine',
      backgroundColor: {
        value: ['#000', '#FFF'],
        easing: 'easeInOutSine'
      },
      color: {
        value: ['#FFF', '#000'],
        easing: 'easeInOutSine'
      },
      direction: 'alternate',
    });
  }


  render() {
    return(
      <div id='textContainer' ref={this.containerRef}>
      {
        this.state.arr.map((letter, index) => {
          return (
            <span ref={(inp) => {this.refArr.push(inp); console.log(inp);}} className="bouncyLetters" key={index}>{letter}</span>
          )
        })
      }
      </div>
    )
  }
}
