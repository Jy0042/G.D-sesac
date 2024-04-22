import { useRef } from "react";
import { useSelector } from "react-redux";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const inputRef = useRef();

  return (
    <section>
      <h1>To Do List !!</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button>Add List</button>
      </div>
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}> {el.text}
              <button>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  )
}