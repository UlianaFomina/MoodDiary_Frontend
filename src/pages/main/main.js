import React from "react";
import "./main.css"
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {Link} from "react-scroll"

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
                    <Link to="main-info" spy={true} smooth={true} offset={0}
                          duration={1000} className="main-greet-content-arrow">
                        <svg className="main-greet-content-arrow-svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 14L12 21M12 21L5 14M12 21L12 3" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <MainInfo/>
        </div>
    </>)
};
