import React, { Component } from 'react';

import $ from 'jquery';

import './Typing.css';


export default class Typing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullword: this.props.wordToType,
      arr: [],
      typing: false,
      backward: false,
      forward: false,
      speed: 150
    }
  }

  componentDidMount() {
    this.makeArr();
    this.setState({
      backward: true
    }, () => {
      console.log("begin!");
    })
  }


  makeArr = () => {
    let temp = [];
    for(let i = 0; i < this.state.fullword.length; i++) {
      temp.push(this.state.fullword.substring(i,i+1));
    }
    this.setState({
      arr: temp
    }, ()=> {
      console.log(this.state.arr);
    })
  }

  animateBorder = () => {
    if(this.state.typing === true) {
      $('#typedTextDiv').css("animation", "none");
    }
  }

  typeBackward = (idx) => {
    if(idx === -1) {
      this.setState({
        forward: true,
        backward: false,
      }, ()=> {
        return 0;
      })
    }
    else {
      setTimeout(()=> {
        $("#"+idx).css("display", "none");
        console.log("Backward:" + idx);
        this.typeBackward(idx-1);
      }, this.state.speed)
    }
  }

  typeForward = (idx) => {
    if(idx === this.state.arr.length) {
      setTimeout(()=> {
        this.setState({
          backward: true,
          forward: false
        }, ()=> {
          return this.state.arr.length-1;
        })
      }, 2000)
    }
    else {
      setTimeout(()=> {
        $("#"+idx).css("display", "inline");
        console.log("Forward: "+ idx);
        this.typeForward(idx+1);
      }, this.state.speed)
    }
  }

  typeWord = () => {
    let c = this.state.arr.length-1;
    // this.typeBackward(c);
    // setTimeout(()=> {
    //   this.typeForward(0);
    // },500*this.state.arr.length+100)
    if(this.state.backward) {
      this.typeBackward(c);
    }
    if(this.state.forward) {
      this.typeForward(0);
    }
  }




  render() {
    this.animateBorder();
    ///
    this.typeWord();

    ///
    return (
        <div id="typedTextDiv">
          {
            this.state.arr.map((i,index) => {
              return <span key={index} id={""+index} className='letters'>{i}</span>
            })
          }

        </div>
    )
  }
}
