import React from "react";
import {Navigate} from "react-router-dom";
import {extract} from "../service/jwt";

const isTokenValid = (expiredAt) => {
    let now = Math.floor(Date.now() / 1000) + 5000;

    return expiredAt && expiredAt < now;
}

export const RouteGuard = ({element: Component}) => {
    const token = sessionStorage.getItem("token");
    const auth = token !== undefined && token != null;

    let valid;
    if(auth) {
        const extractedToken = extract(token);
        valid = isTokenValid(extractedToken.expiredAt)
    }

    return auth && valid ? <Component/> : <Navigate to="/"/>
};


