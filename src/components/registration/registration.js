import React, {useState} from "react";
import "./registration.css"
import {registrationApi, getErrMess} from "../../service/auth";
import {useNavigate} from "react-router-dom";

export const Registration = ({...props}) => {
    const [pass, setPass] = useState('');
    const [passControl, setPassControl] = useState('');
    const [isEquals, setIsEquals] = useState(true)
    const [errorMess, setErrorMess] = useState('')
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErrorMess("")
        if (pass === passControl) {
            setIsEquals(true);
            const form = e.target;
            const formData = new FormData(form);

            registrationApi(formData).then(response => {
                navigate("/confirm-email")
                localStorage.setItem("email", formData.get("email").name)
            }).catch(err => {
                getErrMess(err.response.data,setErrorMess)
            })
        } else setIsEquals(false)
    }

    return (
        <>
            <div className={props.isNowLogin ? "entry-box reg-box-close" : " entry-box reg-box-open"}>
                <h1 className="entry-box-title">Registration</h1>
                <form method="POST" onSubmit={handleSubmit} className="entry-box-form">
                    <input type="email" placeholder="email" name="email" className="entry-box-form-input" required/>
                    <input type="text" placeholder="username" name="username" className="entry-box-form-input"
                           minLength='4' maxLength='12' required/>
                    <textarea maxLength="200" className="entry-box-form-input" name="about" placeholder="about"/>
                    <input type="date" name="dateOfBirth" className="entry-box-form-input" required/>

                    <input type="password" placeholder="password"
                           value={pass} onChange={e => {
                        setPass(e.target.value);
                        setIsEquals((true))
                    }}
                           minLength='6' maxLength='12' className="entry-box-form-input" required/>

                    <input type="password" name="password" placeholder="repeat password"
                           value={passControl} onChange={e => {
                        setPassControl(e.target.value);
                        setIsEquals((true))
                    }}
                           minLength='6' maxLength='12' className="entry-box-form-input" required/>

                    <input type="file" name="imageUrl" className="entry-box-form-input"/>
                    <button type="submit" className="entry-box-form-input">Submit</button>
                </form>
                <button onClick={props.setEntryState} className="entry-box-link">You already have an account?</button>
            </div>
            {isEquals ? null : (
                <div className="entry-message">
                    <h3>Entered passwords do not match</h3>
                </div>
            )}
            {errorMess ? (
                <div className="entry-message">
                    <h3>{errorMess}</h3>
                </div>
            ) : null
            }
        </>
    );
};
