import React, {useEffect, useState} from "react";
import "./profile.css"
import {ProfileInfo} from "../../components/profileInfo/profileInfo";
import {ProfileFeed} from "../../components/profileFeed/profileFeed";
import {Loader} from "../../components/loader/loader";
import {getById} from "../../service/user";

export const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    const userId = sessionStorage.getItem("id")

    const userAndStoriesFetch = async () => {
        setLoading(true)
        const user = await getById(userId)
        setUser(user)

        setLoading(false)
    }

    useEffect(() => {
        userAndStoriesFetch();
    });

    return (
        <div className="profile container-bg">
            <div className="bg">{}</div>
            <ProfileInfo user={user}/>
            <ProfileFeed stories={user ? user.stories : null}/>
            <Loader loading={loading}/>
        </div>
    )
};
