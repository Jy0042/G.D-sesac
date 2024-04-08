// vanilla JS로 작성
/*
export default function FuncState() {
  let apple = '사과';

  const inEng = () => {
    // .state 요소를 찾아 해당 요소의 content를 apple로 바꾸기
    const content = document.querySelector('.state');
    content.innerText = 'apple';
    apple = 'apple';

    console.log(apple); // apple이 콘솔창에 찍히도록 함수 작성
  };

  return (
    <>
      <h2>함수형 컴포넌트에서 state 사용하기</h2>
      <div>이 컴포넌트는 vanilla JS로 작성</div>
      <button onClick={() => inEng()}>영어로 바꾸기</button>
      <div className='state'>{apple}</div>
    </>
  );
}
*/

// ------------------------------

// useState 사용
/*
import { useState } from 'react';

export default function FuncState() {
  // const [state 변수명, state를 변경시키는 setter 함수] = useState(state의 초기값)
  // useState를 사용해 state 선언 시 state와 state를 변경시키는 setter 함수를 배열로 반환
  // 해당 state와 setter 함수를 구조 분해 할당 하여 변수에 저장하고 바로 사용
  const [apple, setApple] = useState('사과');
  const [number, setNumber] = useState(0);

  return (
    <>
      <h2>함수형 컴포넌트에서 state 사용하기</h2>
      <div>이 컴포넌트는 useState 사용</div>
      <button onClick={() => setApple('apple')}>영어로 변경</button>
      <div>{apple}</div>

      <hr />

      <h2>number state를 1씩 증가시키는 버튼 만들기</h2>
      <div>{number}</div>
      <button
        onClick={() => {
          // number state를 1 더하는 로직 다음에 alert을 띄우는 로직이 작성되어있어도
          // alert에 보이는 값은 1을 더하기 전 number 값이 보임
          // state의 setter함수는 비동기적으로 동작함
          // 그래서 number라는 state가 1 더한 값으로 업데이트되기 전
          // alert 창이 띄워져 버려서 1 더한 값이 아닌 원래 값이 보이게 됨
          // setNumber(number + 1);
          // alert(number);

          // 이를 해결하기 위한 하나의 예시
          // state의 setter 함수에 인자로 업데이트할 값이 아닌 콜백 전달
          // 해당 콜백의 인자로는 원래 state 값이고 원래 state 값에 1을 더하는 로직
          // setNumber((prevNum) => prevNum + 1)

          setNumber((prevNum) => {
            alert(prevNum + 1);
            return prevNum + 1;
          });
        }}
      >
        + 1
      </button>
    </>
  );
}
*/

// ------------------------------
import { useState } from "react";

export function FuncState() {
  const [apple, setApple] = useState("사과");

  const toggleLang = () => {
    if (apple === "사과") {
      setApple("apple");
    } else {
      setApple("사과");
    }
  };

  return (
    <>
      <h2>클래스형 컴포넌트에서 state 사용하기</h2>
      <button onClick={toggleLang}>영 / 한 변경</button>
      <div>{apple}</div>
    </>
  );
}

// ------------------------------

export function TrainingFunc() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 2);
  };

  return (
    <>
      <h2>실습(함수형 컴포넌트)</h2>
      <div>{num}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </>
  );
}

// 함수형 컴포넌트에서 useState hook을 통해 state 사용 실습

export  function Prac1() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 2);
  };

  return (
    <>
      <h1>
        {number} {number < 8 ? '😘' : '👊'}
      </h1>
      <button onClick={increase}>+ 1</button>
      <button onClick={decrease}>- 2</button>
    </>
  );
}