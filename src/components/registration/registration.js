import React, {useState} from "react";
import "./registration.css"
import {registrationApi} from "../../services/registration";

export const Registration = ({...props}) => {
    const [pass, setPass] = useState('');
    const [passControl, setPassControl] = useState('');
    const [isEquals, setIsEquals] = useState(true)

    function handleSubmit(e) {
        e.preventDefault();
        if (pass === passControl) {
            let form = e.target;
            const formData = new FormData(form);
            formData.set('imageUrl', '');

            const formJson = Object.fromEntries(formData.entries());

            registrationApi(formJson, form.method)
                .then(response => console.log("Actual response:" + response))
                .catch(error => console.log("Error: " + error))
        } else setIsEquals(false)
    }

    return (
        <div className={props.isNowLogin ? "entry-box reg-box-close" : " entry-box reg-box-open"}>
            <h1 className="entry-box-title">Registration</h1>
            <form onSubmit={handleSubmit} className="entry-box-form">
                <input type="email" placeholder="email" name="email" className="entry-box-form-input" required/>
                <input type="text" placeholder="username" name="username" className="entry-box-form-input" required/>
                <textarea maxLength="200" className="entry-box-form-input" name="about" placeholder="about"/>
                <input type="date" name="dateOfBirth" className="entry-box-form-input" required/>

                <input type="password" placeholder="password"
                       value={pass} onChange={e => setPass(e.target.value)}
                       className="entry-box-form-input" required/>

                <input type="password" name="password" placeholder="repeat password"
                       value={passControl} onChange={e => setPassControl(e.target.value)}
                       className="entry-box-form-input" required/>

                <input type="file" name="imageUrl" className="entry-box-form-input"/>
                <button type="submit" className="entry-box-form-input">Submit</button>
            </form>
            <button onClick={props.setEntryState} className="entry-box-link">You already have an account?</button>
        </div>
    );
};
