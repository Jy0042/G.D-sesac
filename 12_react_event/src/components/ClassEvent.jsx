import { Component } from "react";

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);

    // handleClick이라는 함수의 this 를 함수 자체의 this가 아닌
    // 클래스 자체를 의미하는 this로 바인딩(묵어줌)
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    msg: "오늘의 날씨는 더워요",
  };

  // 함수 선언문을 사용해 메서드를 정의
  // 함수 내부의 this 는 클래스의 this 와 다른 자체적인 this 가 됨
  // 생성자 함수 내부에서 this 를 원하는 것으로 바인딩
  handleClick() {
    this.setState({ msg: "에어컨 틀어주세요" });
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서 event</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>변경</button>

        <input type="text" onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }} 
        />
      </>
    );
  }
}