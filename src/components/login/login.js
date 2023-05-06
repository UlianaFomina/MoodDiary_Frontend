import React from "react";
import "./login.css"

export const Login = ({...props}) => {
    return (
        <div className={props.isNowLogin? "entry-box login-box-open ":"entry-box login-box-close" }>
            <h1 className="entry-box-title">Login</h1>
            <form className="entry-box-form">
                <input type="email" placeholder="email" className="entry-box-form-input"  required/>
                <input type="password" placeholder="password" className="entry-box-form-input"  required/>
                <button type="submit" className="entry-box-form-input">Submit</button>
            </form>
            <a href="/" className="entry-box-link">Forgot your password?</a>
            <button onClick={props.setEntryState} className="entry-box-link">You don't have an account?</button>
        </div>
    );
};