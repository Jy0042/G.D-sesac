import { useMemo, useState } from "react"

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  // calc 함수는 inputVal state가 업데이트 될 때도 함수가 실행됨
  // -> console이 출력되는 것을 확인
  // const calc = () => {
  //   console.log('...calc');

  //   return count * 2;
  // }

  //useMemo 사용해서 count의 값에 변화가 있을 때만 콜백 함수 실행 시키기
  // 랜더링 과정에서 두 번째 인자로 받은 의존성 배열 내 요소의 값이 바뀌는 경우
  // 첫 번째 인자로 받은 콜백 함수가 실행 -> 리턴값을 반환
  // 즉, inputVal state가 변경되면 컴포넌트를 리랜더링 되지만, calc 함수는 다시 실행되지 않음
  // 해당 함수의 "반환값" 을 "기억" 하고 있다가 의존성 배열의 값 (count) 변경 시 재실행
  const calc = useMemo(() => {
    console.log("...calc");
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>useMemo hook</h2>
      <div>inputVal : {inputVal}</div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <div>count : {count}</div>
      {/* useMemo 사용 x */}
      {/* <div>calc : {calc}</div> */}
      {/* useMemo 사용 */}
      <div>{calc}</div>
    </>
  );
}

// useMemo는 메모이제이션으로 수행한 연산의 결과값을 기억함으로 써 불필요한 계산을 최소화하고, 리렌더링을 방지할 수 있음

// useEffect vs useMemo
// - useEffect : 해당 컴포넌트의 렌더링이 완료된 이후 실행
//               렌더링 후 상태가 업데이트 되었을 때를 감지하여 동작하기 때문에 리렌더링을 감지할 수 없음
// - useMemo : 렌더링 과정 중에 실행
//             렌더링 과정 중에 의존성 배열의 값이 변경 되었는 지 확인한 후 값이 변경 되었다면 이전에 저장한 값이랑 비교 후 값이 다른 경우 리렌더링
//             useMemo는 메모이제이션을 통해 불필요한 계산을 최소화하고, 리렌더링을 막을 수 있어 렌더링 성능을 최적화 할대 사용하는 hooks 