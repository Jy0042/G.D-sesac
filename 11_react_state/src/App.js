import ClassState from './components/ClassState';
import { FuncState, TrainingFunc, Prac1 } from "./components/FuncState";
import TrainingState from "./components/TrainingState";
import CharactersContainer from "./components/CharactersContainer";



function App() {
  return (
    <div className="App">
      <ClassState />
      <FuncState />
      <TrainingFunc />
      <Prac1 />
      <TrainingState />
      <CharactersContainer />
    </div>
  );
}

export default App;
