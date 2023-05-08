import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import {Entry} from "../pages/entry/entry";
import {Main} from "../pages/main/main";
import {Layout} from "../components/layout/layout";
import {NewEntry} from "../pages/newEntry/newEntry";


export const Routing = ({ ...props }) => {
    const location = useLocation();
    console.log(location)
    return (
        <Routes location={location}>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Entry />}/>
                <Route path="/main" element={<Main />} />
                <Route path="/new-entry" element={<NewEntry/>}/>
            </Route>
        </Routes>
    );
};