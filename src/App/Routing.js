import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {Login} from "../pages/login/login";


export const Routing = ({ ...props }) => {
    const location = useLocation();
    return (
        <Routes location={location}>
            <Route path="/" element={<Login />}/>
        </Routes>
    );
};