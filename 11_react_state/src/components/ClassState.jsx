import { Component } from "react";

export default class ClassState extends Component {
  // 처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
  // constructor(props) {
  //   super(props) // Components 클래스에서 props 상속

  //   this.state = {
  //     banana: '바나나',
  //   };
  // }

  // 현재 클래스형 컴포넌트에서 state를 사용하는 방법
  // constructor 생성자 함수를 작성하는 대신 state만 바로 작성
  // constructor 생성자 함수를 작성하지 않으면 자동으로 아래의 코드 실행 됨
  // constructor(props) {
  //   super(props);
  // }
  state = {
    banana: "바나나", // banana 라는 state를 선언하고 해당 state의 값으로 '바나나'를 저장
  };

  
  render() {
    const { banana } = this.state;

    return (
      <>
        <h2>클래스형 컴포넌트에서 state 사용하기</h2>
        <button onClick={() => this.setState({ banana: 'banana' })}>영어로 변경</button>
        <div>{this.state.banana}</div>
        <div>{banana}</div>
      </>
    );
  };
}

// 클래스형 컴포넌트에서 state 사용 실습
/*
import React, { Component } from 'react';

export default class Prac1 extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => this.setState({ number: number + 2 })}>
          + 2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          - 1
        </button>
      </>
    );
  }
}
*/

// --------------------------------------------------------