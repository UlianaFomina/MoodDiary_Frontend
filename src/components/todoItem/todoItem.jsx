import "./todoItem.css"

export const TodoItem = () => {

    return (
       <button className="todo-item">
            <button className="todo-item-btn"></button>
            <div className="todo-item-main">
                <h2 className="todo-item-name">Name</h2>
                <div className="todo-item-data">
                    <div className="todo-item-flags">
                        <p className="todo-item-flag">dfsdfds</p>                      
                        <p className="todo-item-flag">dfsdfds</p>                       
                    </div>
                    <p>1 hour</p>
                </div>
            </div>
       </button>
    )
};
