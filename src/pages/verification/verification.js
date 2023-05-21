import React from "react";
import "./verification.css";

export const Verification = ({...props}) => {
    const token = undefined || null;
    const email = localStorage.getItem("email");
    return (
        <div className="verification container-bg">
            <div className="verification-mess">
                <h2 className="verification-mess-text">
                    {token ? "Please verify your email: 6758599@gmail.com" : null}
                    {email ? "Please verify your email: 6758599@gmail.com" : "Email is not exists"}
                </h2>
            </div>
            <a href="/" className="verification-link">Back to login page</a>
        </div>
    )
}