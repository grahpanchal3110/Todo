import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const ToDo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());
  // Submit form
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) {
      console.error("Task already exists!");
      return;
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //Add data to the LocalStorage
  setLocalStorageTodoData(task);

  //Delete Todo
  const handleDelete = (value) => {
    console.log(task);

    const updatedTask = task.filter((item) => item.content !== value);
    // const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  };

  //Check todo
  const handleCheckTodo = (content) => {
    const updatedTask = task.map((item) => {
      if (item.content === content) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTask(updatedTask);
  };

  //Clear Todo Data
  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <TodoList
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onHandleDeleteTodo={handleDelete}
              onHandleCheckTodo={handleCheckTodo}
            />
          ))}
        </ul>
      </section>

      <section className="clear-btn" onClick={handleClearTodoData}>
        Clear All
      </section>
    </section>
  );
};

export default ToDo;
