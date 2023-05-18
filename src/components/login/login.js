import React, {useState} from "react";
import "./login.css"
import {getErrMess, authenticateApi} from "../../services/auth";
import {useNavigate} from "react-router-dom";

export const Login = ({...props}) => {
    const [errorMess, setErrorMess] = useState('')
    let navigate = useNavigate();

    function handleSubmitLogin(e) {
        e.preventDefault();
        setErrorMess("")
        const form = e.target;
        const formData = new FormData(form);
        authenticateApi(formData, form.method)
            .then(response => {
                let callResponse = getErrMess(response, setErrorMess);
                if(!callResponse) {
                    sessionStorage.setItem("token", response.token);
                    navigate("/main")
                }
            })
            .catch(error => (console.log(error)))
    }

    return (
        <>
            <div className={props.isNowLogin ? "entry-box login-box-open " : "entry-box login-box-close"}>
                <h1 className="entry-box-title">Login</h1>
                <form method="POST" onSubmit={handleSubmitLogin} className="entry-box-form">
                    <input name="username" type="text" placeholder="email" className="entry-box-form-input" required/>
                    <input name="password" minLength='6' maxLength='12' type="password" placeholder="password"
                           className="entry-box-form-input" required/>
                    <button type="submit" className="entry-box-form-input">Submit</button>
                </form>
                <a href="/" className="entry-box-link">Forgot your password?</a>
                <button onClick={props.setEntryState} className="entry-box-link">You don't have an account?</button>
            </div>
            {errorMess ? (
                <div className="entry-message">
                    <h3>{errorMess}</h3>
                </div>
            ) : null
            }
        </>

    );
};
