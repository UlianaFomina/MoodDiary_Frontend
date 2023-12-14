import { useState } from "react";
import { Todo } from "../../components/todo/todo";
import "./planing.css"
import { Habits } from "../../components/HabitsComponents/habits/habits";
import { Goals } from "../../components/goals/goals";

export const Planing = () => {
    const [activeComponent, setActiveComponent] = useState("todo")


    return (
        <div className="new-entry container-bg">
            <div className="bg">{}</div>
            <div className="wrap">
               <div className="planing-header">
                    <button className="planing-header-btn todo-btn" onClick={()=> setActiveComponent("todo")}>ToDo</button>
                    <button className="planing-header-btn habits-btn" onClick={()=> setActiveComponent("habits")}>Habits</button>
                    <button className="planing-header-btn goals-btn"  onClick={()=> setActiveComponent("goals")}>Goals</button>
               </div>
               {activeComponent === "todo" ? <Todo/> : <></>}
               {activeComponent === "habits" ? <Habits/> : <></>}
               {activeComponent === "goals" ? <Goals/> : <></>}
            </div>
        </div>
    )
};
