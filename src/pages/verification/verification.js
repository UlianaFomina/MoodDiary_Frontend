import React, {useEffect, useState} from "react";
import "./verification.css";
import {verifyEmail} from "../../service/verification";
import {useNavigate} from "react-router-dom";

export const Verification = ({...props}) => {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const token = new URLSearchParams(document.location.search).get("token")
    const email = sessionStorage.getItem("email");

    const verify =  () => {
        if (token) {
            verifyEmail(token)
                .then(resp => {
                    setMessage(resp);

                    navigate("/");
                })
                .catch(e => {
                    setMessage(e.response.data.errors[0].message)
                })
        }
    }

    useEffect(() => {
        verify()
    }, [])

    return (
        <div className="verification container-bg">
            <div className="verification-mess">
                <h2 className="verification-mess-text">
                    {token ? message : null}
                    {email && token == null ? `Please verify your email: ${email}` : null}
                </h2>
            </div>
            <a href="/" className="verification-link">Back to login page</a>
        </div>
    )
}