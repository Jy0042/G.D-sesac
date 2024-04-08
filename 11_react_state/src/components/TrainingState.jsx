import React, { Component } from "react";

// 클래스형
export default class TrainingState extends Component {
  state = {
    num: 0,
  };

  numPlus = () => {
    this.setState({ num: this.state.num + 2 });
  }

  numMinus = () => {
    this.setState({ num: this.state.num - 1 });
  }

  render() {
    const { num } = this.state;
    return (
      <>
        <h2>실습(클래스형 컴포넌트)</h2>
        <div>{num}</div>
        <button onClick={this.numPlus}>+2</button>
        <button onClick={this.numMinus}>-1</button>
      </>
    );
  }
}
