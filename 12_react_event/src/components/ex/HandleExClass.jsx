import { Component } from "react";

export default class HandleExClass extends Component {
  constructor(props) {
    super(props);

    this.HandleClick = this.HandleClick.bind(this);
  }
  state = {
    txt: "Hello World!",
  };

  HandleClick() {
    this.setState({ txt: "Goodbye World!" });
  }

  render() {
    return (
      <>
        <h2>이벤트 핸들링 실습1(클래스형)</h2>
        <div>{this.state.txt}</div>
        <button onClick={this.HandleClick}>텍스트 변경</button>
      </>
    );
  }
}