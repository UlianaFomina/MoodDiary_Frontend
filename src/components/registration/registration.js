import React, {useState} from "react";
import "./registration.css"
import {registrationApi} from "../../service/auth";
import {useNavigate} from "react-router-dom";
import {handleException} from "../../service/exception";
import {ErrorMessage} from "../error-message/error-message";
import {attachAvatar} from "../../service/user";
import {extract} from "../../service/jwt";

export const Registration = ({...props}) => {
    const [pass, setPass] = useState('');
    const [passControl, setPassControl] = useState('');
    const [isEquals, setIsEquals] = useState(true)
    const [errorMess, setErrorMess] = useState('')
    const [file, setFile] = useState('');
    const navigate = useNavigate();

    function onChangeFile(e){
        e.preventDefault();
        setFile(e.target.files[0])
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrorMess("")
        if (pass === passControl) {
            setIsEquals(true);
            const form = e.target;
            const formData = new FormData(form);

            registrationApi(formData).then((response) => {
                localStorage.setItem("email", formData.get("email").name)

                if(file) {
                    let {id} = extract(response.token);
                    attachAvatar(id, file)
                        .then(() => navigate("/confirm-email"))
                        .catch(() => localStorage.removeItem("email"));
                }
                navigate("/confirm-email")
            }).catch(err => {
                handleException(err.response.data,setErrorMess)
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
                        setIsEquals(true)
                    }}
                           minLength='6' maxLength='12' className="entry-box-form-input" required/>

                    <input type="password" name="password" placeholder="repeat password"
                           value={passControl} onChange={e => {
                        setPassControl(e.target.value);
                        setIsEquals(true)
                    }}
                           minLength='6' maxLength='12' className="entry-box-form-input" required/>

                    <input
                        type="file"
                        name="imageUrl"
                        className="entry-box-form-input"
                        accept="image/*"
                        onChange={onChangeFile}
                    />
                    <button type="submit" className="entry-box-form-input">Submit</button>
                </form>
                <button onClick={props.setEntryState} className="entry-box-link">You already have an account?</button>
            </div>
            {isEquals ? null : (
                <div className="entry-message">
                    <h3>Entered passwords do not match</h3>
                </div>
            )}
            {errorMess ? (<ErrorMessage error={errorMess}/>) : null}
        </>
    );
};
