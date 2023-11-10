import React, { useState } from "react";
import styles from "./TodoList.module.css";


function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [buttonState, setButtonState] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const handleButtonClick = () => {
    setButtonState(!buttonState);
    // console.log(buttonState);
  };

  return (
    <div className={styles.text}>
      <h1>To Do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            <button
              className={`${styles.button_green} ${
                  buttonState ? styles.verde : styles.branco
                }`}
                onClick={handleButtonClick}
                ></button>
                {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;