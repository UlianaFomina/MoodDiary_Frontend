import React from "react";
import avatar from "../../assets/avatar.jpg"
import "./profileInfo.css"

export const ProfileInfo = ({user}) => {
    return (
        <div className="profile-content">
            <div className="profile-info">
                <div className="profile-info-bg">{}</div>
                <div className="profile-info-content">
                    <div className="profile-info-content-avatar">
                        <img src={user ? user.imageUrl : avatar} onError={event => event.target.src=avatar} alt="img" className="profile-info-content-avatar"/>
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
