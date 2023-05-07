import React from "react";
import "./main.css"

export const Main = ({...props}) => {
    return (<>
        <div className={"main wrap"}>
            <div className={"main-greet container-bg"}>
                <div className={"bg"}>
                </div>
                <div className={"main-greet-content content"}>
                    <div className={" mood-box"}>
                        <h1 className={"main-greet-content-title"}>Mood</h1>
                    </div>
                    <div className={" diary-box"}>
                        <h1 className={"main-greet-content-title"}>Diary</h1>
                    </div>
                </div>
            </div>
        </div>
    </>)
};