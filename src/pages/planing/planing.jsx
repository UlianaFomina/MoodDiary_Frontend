import { Todo } from "../../components/todo/todo";
import "./planing.css"

export const Planing = () => {
    
    return (
        <div className="new-entry container-bg">
            <div className="bg">{}</div>
            <div className="wrap">
               <div className="planing-header">
                    <button className="planing-header-btn todo-btn">ToDo</button>
                    <button className="planing-header-btn habits-btn">Habits</button>
                    <button className="planing-header-btn goals-btn">Goals</button>
               </div>
               <Todo/>
            </div>
        </div>
    )
};
