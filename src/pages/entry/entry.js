import React, {useState} from "react";
import "./entry.css"
import {Login} from "../../components/login/login";
import {Registration} from "../../components/registration/registration";

export const Entry = ({...props}) => {
    const [isNowLogin, setIsNowLogin] = useState(true);
    const setEntryState = () => {
        setIsNowLogin(!isNowLogin)
    }
    return (
        <div className="entry">
            <Login isNowLogin={isNowLogin} setEntryState={setEntryState}/>
            <Registration isNowLogin={isNowLogin} setEntryState={setEntryState}/>
        </div>
    );
};