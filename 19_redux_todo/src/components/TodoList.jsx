import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, done } from '../store/modules/todo';
import "../styles/main.scss";

export default function ToDoList() {
  const list = useSelector((state) => state.todo.list).filter((el) => el.done === false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const nextID = useSelector((state) => state.todo.nextID);

  return (
    <section>
      <h1 className="title">To Do List !!</h1>
      <div className="container">
        <input type="text" ref={inputRef} className="input-box" placeholder="리스트 작성" />
        <button
          className="buttons"
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value }));
            inputRef.current.value = "";
          }}
        >
          Add List
        </button>
      </div>
      <ul className="list-container">
        {list.map((el) => {
          return (
            <li className="list" key={el.id}>
              {el.text}
              <button
                className="buttons list-btn"
                onClick={() => dispatch(done(el.id))}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}