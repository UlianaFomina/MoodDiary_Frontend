import React, {useState} from "react";
import "./registration.css"

export const Registration = ({...props}) => {
    const [pass,setPass]= useState('');
    const [passControl,setPassControl]= useState('');
    function handleSubmit(e) {
        e.preventDefault();
        if(pass === passControl){
            const form = e.target;
            const formData = new FormData(form);
            fetch('https://mooddiarybackend-production.up.railway.app/swagger-ui/index.html', {
                method: form.method,
                body: formData
            }).then();
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
        }
        else console.log("ERROR!!!!!!!!!!!!")
    }

    return (
        <div className={props.isNowLogin ? "entry-box reg-box-close" : " entry-box reg-box-open"}>
            <h1 className="entry-box-title">Registration</h1>
            <form method="post" onSubmit={handleSubmit} className="entry-box-form">
                <input type="email" placeholder="email" name="email" className="entry-box-form-input" required/>
                <input type="text" placeholder="username" name="username" className="entry-box-form-input" required/>
                <textarea maxLength="200" className="entry-box-form-input" name="about" placeholder="about"/>
                <input type="date" name="date" className="entry-box-form-input" required/>

                <input type="password" placeholder="password"
                       value={pass} onChange={e=> setPass(e.target.value)}
                       className="entry-box-form-input" required/>

                <input type="password" name="password" placeholder="repeat password"
                       value={passControl} onChange={e=> setPassControl(e.target.value)}
                       className="entry-box-form-input" required/>

                <input type="file" name="imageUrl" className="entry-box-form-input"/>
                <button type="submit" className="entry-box-form-input">Submit</button>
            </form>
            <button onClick={props.setEntryState} className="entry-box-link">You already have an account?</button>
        </div>
    );
};