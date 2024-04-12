import { useState } from "react";

export default function HandleExFunc() {
  const [txt, setTxt] = useState('Hello World');
  
  const txtChange = () => {
    setTxt("Goodbye World");
  }
  
  const [txtColor, setTxtColor] = useState({
    color: 'black',
    text: '검정색',
  });

  const redTxt = () => {
    setTxtColor({
      color: "red",
      text: "빨간색",
    });
  };

  const blueTxt = () => {
    setTxtColor({
      color: "blue",
      text: "파란색",
    });
  };

  return (
    <>
      <h2>이벤트 핸들링 실습1(함수형)</h2>
      <div>{txt}</div>
      <button onClick={txtChange}>텍스트 변경</button>

      <br />

      <h2>이벤트 핸들링 실습2(함수형)</h2>
      <div style={{ color: txtColor.color }}>{txtColor.text}</div>
      <button onClick={redTxt}>빨간색</button>
      <button onClick={blueTxt}>파란색</button>
    </>
  );
}