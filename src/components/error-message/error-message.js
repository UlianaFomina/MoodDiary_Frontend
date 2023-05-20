import React from "react";
import "./error-message.css"

export const ErrorMessage = ({error}) => {
    return (
        <div className="error-message">
            <h3>{error}</h3>
        </div>
    )
}