import React from "react";
import avatar from "../../assets/avatar.jpg"
import "./profileInfo.css"

export const ProfileInfo = ({...props}) => {
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
                            <p className="profile-info-content-desk-item desk"> user123456</p>
                            <p className="profile-info-content-desk-item desk"> user123@gmail.com</p>
                            <p className="profile-info-content-desk-item desk">17.02.2003</p>
                            <p className="profile-info-content-desk-item desk"> Reading practice to help you
                                understand texts with a wide vocabulary where you may need to consider the writer's
                                opinion. Texts include articles, reports, messages, short stories and reviews.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};