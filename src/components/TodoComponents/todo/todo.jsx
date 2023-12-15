import { useState } from "react";
import { DateArrow } from "../../../Icons/date-arrow";
import { TaskForm } from "../taskForm/taskForm.jsx";
import { TodoItem } from "../todoItem/todoItem.jsx";
import { TodoOffers } from "../todoOffers/todoOffers.jsx";
import "./todo.css";

export const Todo = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [isTaskFormActive, setIsTaskFormActive] = useState(false);

  function startToSetActiveDate(way) {
    let date = new Date();
    date.setDate(activeDate.getDate() + way);
    setActiveDate(date);
  }

  return (
    <div className="todo-container wrap">
      {isTaskFormActive ? <TaskForm /> : <></>}
      <div className="todo-main">
        <div className="date">
          <button className="date-btn" onClick={() => startToSetActiveDate(-1)}>
            <DateArrow classname={"date-svg date-svg-first"} />
          </button>
          <p className="date-text">{activeDate.toDateString()}</p>
          <button className="date-btn" onClick={() => startToSetActiveDate(1)}>
            <DateArrow classname={"date-svg"} />
          </button>
        </div>
        <div className="todo-list-conteiner">
          <button
            className="todo-item todo-list-container-btn"
            onClick={() => setIsTaskFormActive(!isTaskFormActive)}
          >
            Add new task
          </button>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
      <TodoOffers />
    </div>
  );
};
