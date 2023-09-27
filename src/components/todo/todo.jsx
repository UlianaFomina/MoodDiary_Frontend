import { useState } from "react";
import { DateArrow } from "../../Icons/date-arrow.tsx";
import "./todo.css"
import { TodoItem } from "../todoItem/todoItem.jsx";

export const Todo = () => {
    const [activeDate, setActiveDate] = useState(new Date())
    
    function startToSetActiveDate(way){
        let date =new Date();
        date.setDate(activeDate.getDate()+way)
        setActiveDate(date)
    }

    return (
       <div className="wrap">
        <div className="todo-main">
         <div className="date">
                <button className="date-btn" onClick={()=> startToSetActiveDate(-1)}>
                    <DateArrow classname={"date-svg date-svg-first"}/>
                </button>
                <p className="date-text">{activeDate.toDateString()}</p>
                <button className="date-btn"  onClick={()=> startToSetActiveDate(1)}>
                    <DateArrow classname={"date-svg"}/>
                </button>
            </div>
            <div className="todo-list-conteiner" >
               <TodoItem/>
            </div>
        </div>
       </div>
    )
};
