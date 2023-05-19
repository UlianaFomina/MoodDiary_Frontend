import React, {useState} from "react";
import "./newEntry.css"
import {attachPostToUser} from "../../service/story";

export const NewEntry = ({...props}) => {
    const [content, setContent] = useState();
    const userId = sessionStorage.getItem("id");
    const addNewStory = async (e) => {
        e.preventDefault();
        try {
            await attachPostToUser(userId, content)
        } catch (err) {

        }
    }
    return (
        <div className="new-entry container-bg">
            <div className="bg"></div>
            <div className=" content">
                <div className="new-entry-content">
                    <form onSubmit={addNewStory} className="new-entry-form">
                        <h2 className="new-entry-form-title">Tell about your day:</h2>
                        <textarea onChange={(event) => setContent(event.target.value)} maxLength="1000" className="new-entry-form-input" required/>
                        <button type="submit" className="new-entry-form-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
