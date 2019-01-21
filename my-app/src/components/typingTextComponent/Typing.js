import React, { Component } from 'react';


import './Typing.css';


export default class Typing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullword: this.props.wordToType,
      arr: [],
    }
  }

  componentDidMount() {

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



  render() {
    return (
        <div id="typedTextDiv">
          {
            this.state.arr.map((i,index) => {
              return <span id={index+""} className='letters'>{i}</span>
            })
          }
        </div>
    )
  }
}
