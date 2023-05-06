import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {Entry} from "../pages/entry/entry";


export const Routing = ({ ...props }) => {
    const location = useLocation();
    return (
        <Routes location={location}>
            <Route path="/" element={<Entry />}/>
        </Routes>
    );
};