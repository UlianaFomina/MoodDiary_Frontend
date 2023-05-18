import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import {Entry} from "../pages/entry/entry";
import {Main} from "../pages/main/main";
import {Layout} from "../components/layout/layout";
import {NewEntry} from "../pages/newEntry/newEntry";
import {Profile} from "../pages/profile/profile";
import {RouteGuard} from "../guard/RouteGuard";


export const Routing = ({ ...props }) => {
    const location = useLocation();
    return (
        <Routes location={location}>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Entry />}/>
                <Route path="/main" element={<RouteGuard element={Main}/>}/>
                <Route path="/new-entry" element={<RouteGuard element={NewEntry}/>}/>
                <Route path="/profile" element={<RouteGuard element={Profile}/>}/>
            </Route>
        </Routes>
    );
};
