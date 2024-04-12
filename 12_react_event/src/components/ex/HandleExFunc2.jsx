import { useState } from "react";

export default function HandleExFunc2() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <h2>이벤트 핸들링 실습3(함수형)</h2>
      <button onClick={() => setDisplay(!display)}>{display ? '사라져라' : '보여라'}</button>
      {display && <h2>하이요</h2>}
    </>
  )
}