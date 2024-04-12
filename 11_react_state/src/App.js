import ClassState from './components/ClassState';
import { FuncState, TrainingFunc, Prac1 } from "./components/FuncState";
import TrainingState from "./components/TrainingState";
import CharactersContainer from "./components/CharactersContainer";
import { useState } from 'react';
import Modal from './components/Modal';



function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <ClassState />
      <FuncState />
      <TrainingFunc />
      <Prac1 />
      <TrainingState />
      <CharactersContainer />

      <button onClick={() => setShow(true)}>모달 보이기</button>

      {show && <Modal msg="확인하시겠습니까?" setShow={setShow} />}

      {show && (
        <Modal msg="확인하시겠습니까?22" isInput={true} setShow={setShow} />
      )}

      {show && (
        <Modal
          msg="확인하시겠습니까?333"
          isCancelBtn={true}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;
