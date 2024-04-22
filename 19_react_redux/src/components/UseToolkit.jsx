import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  increase,
  decrease,
  reset,
} from "../store/modules/countSlice";
import { useRef } from 'react';

export default function UseToolkit() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <>
      <h2>redux toolkit 의 createSlice 사용하기</h2>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <br />
      <br />
      <input type="number" ref={inputRef} />
      <br />
      <button
        onClick={() => dispatch(increase(Number(inputRef.current.value)))}
      >
        입력값 더하기
      </button>
      <button
        onClick={() => dispatch(decrease(Number(inputRef.current.value)))}
      >
        입력값 빼기
      </button>
      <button
        onClick={() => dispatch(reset(Number(inputRef.current.value)))}
      >
        reset
      </button>
    </>
  );
}