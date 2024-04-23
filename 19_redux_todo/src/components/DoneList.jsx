import { useSelector } from "react-redux";
import "../styles/main.scss";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter((el) => el.done === true);

  return (
    <section>
      <h1 className="title">완료된 목록</h1>
      <ul className="list-container">
        {list.map((el) => {
          return (
            <li className="list" key={el.id}>
              {el.text}
            </li>
          );
        })}
      </ul>
    </section>
  );
}