import { TodoItem } from "../todoItem/todoItem";
import "./todoOffers.css";

export const TodoOffers = () => {
  return (
    <div className="offers">
      <h2 className="offers-title">Offers</h2>
      <div className="offers-list">
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
        <TodoItem className="offersItem" />
      </div>
    </div>
  );
};
