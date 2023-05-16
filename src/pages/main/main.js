import React from "react";
import "./main.css"
import {MainInfo} from "../../components/mainInfo/mainInfo";


export const Main = ({...props}) => {
    return (<>
        <div className="main container-bg">
            <div className="bg">
            </div>
            <div className={"main-greet"}>
                <div className={"main-greet-content content"}>
                    <div className={" mood-box"}>
                        <h1 className={"main-greet-content-title"}>Mood</h1>
                    </div>
                    <div className={" diary-box"}>
                        <h1 className={"main-greet-content-title"}>Diary</h1>
                    </div>
                </div>
            </div>
            <MainInfo/>
        </div>
    </>)
};