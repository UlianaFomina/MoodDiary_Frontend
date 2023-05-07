import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Header} from "../header/header";

export const Layout = ({...props}) => {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/" ? (<Outlet/>) :
                (<div className={"layout"}>
                    <Header/>
                    <Outlet/>
                </div>)
            }
        </>
    );
};