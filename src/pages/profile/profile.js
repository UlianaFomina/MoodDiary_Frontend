import React from "react";
import "./profile.css"
import {ProfileInfo} from "../../components/profile-info/profileInfo";

export const Profile = ({...props}) => {
    return (
        <div className="profile container-bg">
            <div className="bg"></div>
            <ProfileInfo/>
        </div>
    )
};