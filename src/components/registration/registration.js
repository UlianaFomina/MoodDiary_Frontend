import React from "react";
import "./registration.css"

export const Registration = ({...props}) => {
    return (
        <div className={props.isNowLogin? "entry-box reg-box-close": " entry-box reg-box-open"}>
            <h1 className="entry-box-title">Registration</h1>
            <form className="entry-box-form">
                <input type="email" placeholder="email" className="entry-box-form-input" required/>
                <input type="text" placeholder="username" className="entry-box-form-input" required/>
                <input type="date"  className="entry-box-form-input" required/>
                <textarea maxLength="200" className="entry-box-form-input" placeholder="about" />
                <input type="file" className="entry-box-form-input"/>
                <input type="password" placeholder="password" className="entry-box-form-input" required/>
                <input type="password" placeholder="repeat password" className="entry-box-form-input" required/>
                <button type="submit" className="entry-box-form-input">Submit</button>
            </form>
            <button onClick={props.setEntryState} className="entry-box-link">You already have an account?</button>
        </div>
    );
};