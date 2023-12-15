import "./taskForm.css"

export const TaskForm = () => {
    return (
       <div className="form-container">
            <div className="task-form">
                <form>
                    <p className="form-title"> Add new task!</p>
                    <div className="form-header">
                        <input className="name-input form-input" type="text" placeholder="Name"/>
                        <div className="form-spend-time-input-wrap">
                            <p className="form-flag-title time-title form-input">Spend time:</p>
                            <input className="time-input form-input" type="number" min="1" />
                            <select  className="option-input form-input">
                                <option className="option" value="hour">hour</option>
                                <option className="option" value="min">min</option>
                            </select> 
                        </div>
                    </div>
                    <textarea className="form-desc form-input" maxLength="200" placeholder="Description"/>
                    <div className="form-flags-container">
                        <div className="form-flags-group">
                            <p className="form-flag-title">What you think about this task?</p>
                            <div className="form-flag-container">
                                <input className="flag-input" type="radio" id="important" value="important" name="important"/>
                                <label className="flag-label" for="important">Important</label>
                            </div>
                            <div className="form-flag-container">
                                <input className="flag-input" type="radio" id="not-important" value="not-important" name="important"/>
                                <label className="flag-label" for="not-important">Not important</label>
                            </div>
                        </div>
                        <div className="form-flags-group">
                            <p className="form-flag-title">How often you planing doing this task?</p>
                            <div className="form-flag-container">
                                <input className="flag-input" type="radio" id="every-day" value="every-day" name="every"/>
                                <label className="flag-label" for="every-day">Every Day</label>
                            </div>
                            <div className="form-flag-container">
                                <input className="flag-input" type="radio" id="every-week" value="every-week" name="every"/>
                                <label className="flag-label" for="every-week">Every week</label>
                            </div>
                            <div className="form-flag-container">
                                <input className="flag-input" type="radio" id="every-mounth" value="every-mounth" name="every"/>
                                <label className="flag-label" for="every-mounth">Every mounth</label>
                            </div>
                        </div>
                    </div>
                    <button className="task-form-btn" type="submit">add task</button>
                </form>
            </div>
       </div>
    )
};
