import React, {useEffect, useState} from "react";
import "./profile.css"
import {ProfileInfo} from "../../components/profileInfo/profileInfo";
import {ProfileFeed} from "../../components/profileFeed/profileFeed";
import {getById} from "../../service/user";

export const Profile = () => {
    const [user, setUser] = useState(null);
    const userId = sessionStorage.getItem("id")

    const userAndStoriesFetch = async () => {
        const user = await getById(userId)
        setUser(user)
    }

    useEffect(() => {
        userAndStoriesFetch();
    });

    return (
        <div className="profile container-bg">
            <div className="bg">{}</div>
            <ProfileInfo user={user}/>
            <ProfileFeed stories={user ? user.stories : null}/>
        </div>
    )
};
