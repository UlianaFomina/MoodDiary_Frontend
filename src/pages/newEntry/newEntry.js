import React from "react";
import "./newEntry.css"

export const NewEntry = ({...props}) => {
    return (
        <div className="new-entry container-bg">
            <div className="bg"></div>
            <div className=" content">
                <div className="new-entry-content">
                    <form className="new-entry-form">
                        <h2 className="new-entry-form-title">Tell about your day:</h2>
                        <textarea maxLength="1000" className="new-entry-form-input" required/>
                        <button type="submit" className="new-entry-form-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};