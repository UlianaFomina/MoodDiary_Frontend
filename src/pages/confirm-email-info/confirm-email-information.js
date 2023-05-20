import React from "react";

export const ConfirmEmailInformation = ({...props}) => {
    const email = localStorage.getItem("email")
    return (
       <div>Please confirm your email by address: {email}</div>
    );
};
