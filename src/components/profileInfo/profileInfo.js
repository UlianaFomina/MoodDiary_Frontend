import React, {useEffect, useState} from "react";
import avatar from "../../assets/avatar.jpg"
import "./profileInfo.css"
import {getById} from "../../service/user";

export const ProfileInfo = ({...props}) => {
    const [user, setUser] = useState(null)
    const userId = sessionStorage.getItem("id")

    useEffect(() => {
        const dataFetch = async () => {
            const user = await getById(userId)
            setUser(user)
        }

        dataFetch();
    }, []);


    return (
        <div className="profile-content">
            <div className="profile-info">
                <div className="profile-info-bg"></div>
                <div className="profile-info-content">
                    <div className="profile-info-content-avatar">
                        <img src={avatar} alt="img" className="profile-info-content-avatar"/>
                    </div>
                    <div className="profile-info-content-desk">
                        <div className="profile-info-content-desk-list">
                            <p className="profile-info-content-desk-item title">Username:</p>
                            <p className="profile-info-content-desk-item title">Email:</p>
                            <p className="profile-info-content-desk-item title">Date of Birth:</p>
                            <p className="profile-info-content-desk-item title">About:</p>
                            <button className="profile-info-content-desk-btn">Edit</button>
                        </div>
                        <div className="vertical-line">

                        </div>
                        <div className="profile-info-content-desk-list">
                            <p className="profile-info-content-desk-item desk">{user ? user.username : ""}</p>
                            <p className="profile-info-content-desk-item desk">{user ? user.email : ""}</p>
                            <p className="profile-info-content-desk-item desk">{user ? user.dateOfBirth : ""}</p>
                            <p className="profile-info-content-desk-item desk"> {user ? user.about : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
