import React from "react";
import "./header.css"

export const Header = ({...props}) => {
    return (
        <div className={"header"}>
            <div className={"header-high"}>
                <a href={"/new-entry"} className={"header-link"}> icon</a>
                <a href={"/statistics"} className={"header-link"}> icon</a>
            </div>
            <div className={"header-low"}>
                <a href={"/profile"} className={"header-link"}> icon</a>
            </div>
        </div>
    );
};