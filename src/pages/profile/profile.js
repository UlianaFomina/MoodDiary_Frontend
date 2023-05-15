import React from "react";
import "./profile.css"
import {ProfileInfo} from "../../components/profileInfo/profileInfo";
import {ProfileFeed} from "../../components/profileFeed/profileFeed";

export const Profile = ({...props}) => {
    return (
        <div className="profile container-bg">
            <div className="bg"></div>
            <ProfileInfo/>
            <ProfileFeed/>
        </div>
    )
};