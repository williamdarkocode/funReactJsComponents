import React, { Component } from 'react';
import './ThreeDeeText.css';

import anime from 'animejs';

export default class ThreeDeeText extends Component {
  constructor(props) {
    super(props);
    this.arr = [];
    this.state = {
      txt: this.props.word,
      wordArr: []
    }
  }

  componentDidMount() {
    this.makeArr();
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

  render() {
    return(
      <div id="box">
      {
        this.state.wordArr.map((i, index) => {
          return(<span key={index+""} ref={(inp) => {this.arr.push(inp);}} className="letters">{i}</span>)
        })
      }
      </div>
    )
  }
}
