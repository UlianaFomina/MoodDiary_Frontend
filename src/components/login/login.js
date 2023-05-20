import React, {useState} from "react";
import "./login.css"
import {authenticateApi} from "../../service/auth";
import {useNavigate} from "react-router-dom";
import {extract} from "../../service/jwt";
import {Loader} from "../loader/loader";
import {ErrorMessage} from "../error-message/error-message";
import {handleException} from "../../service/exception";

export const Login = ({...props}) => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    function handleSubmitLogin(e) {
        e.preventDefault();

        setLoading(true)
        setError("")

        const form = e.target;
        const formData = new FormData(form);

        authenticateApi(formData).then(response => {
            let token = extract(response.token);
            let {id, sub} = token;
            sessionStorage.setItem("token", response.token);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("username", sub);

            setLoading(false)
            navigate("/main")
        }).catch(err => {
            setLoading(false)
            handleException(err.response.data, setError);
        });
    }

    return (
        <>
            <div className={props.isNowLogin ? "entry-box login-box-open " : "entry-box login-box-close"}>
                <h1 className="entry-box-title">Login</h1>
                <form method="POST" onSubmit={handleSubmitLogin} className="entry-box-form">
                    <input disabled={loading} name="username" type="text" placeholder="username" className="entry-box-form-input"
                           required/>
                    <input disabled={loading} name="password" minLength='6' maxLength='12' type="password" placeholder="password"
                           className="entry-box-form-input" required/>
                    <button disabled={loading} type="submit" className="entry-box-form-input">Submit</button>
                </form>
                <a href="/" className="entry-box-link">Forgot your password?</a>
                <button onClick={props.setEntryState} className="entry-box-link">You don't have an account?</button>
            </div>
            <Loader loading={loading}/>
            {error ? (<ErrorMessage error={error}/>) : null}
        </>
    );
};
