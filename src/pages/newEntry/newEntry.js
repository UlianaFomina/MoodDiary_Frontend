import React, {useState} from "react";
import "./newEntry.css"
import {attachStory} from "../../service/story";
import {handleException} from "../../service/exception";
import {ErrorMessage} from "../../components/error-message/error-message";
import {useNavigate} from "react-router-dom";
import {Loader} from "../../components/loader/loader";

export const NewEntry = () => {
    const [content, setContent] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const nagivate = useNavigate()
    const userId = sessionStorage.getItem("id");

    const addNewStory = (e) => {
        e.preventDefault();

        setLoading(true)
        setError("")

        attachStory(userId, content)
            .then(() => {
                setLoading(false)
                nagivate("/profile")
            })
            .catch(err => {
                setLoading(false)
                handleException(err.response.data, setError)
            })
    }
    return (
        <div className="new-entry container-bg">
            <div className="bg">{}</div>
            <div className=" content">
                <div className="new-entry-content">
                    <form onSubmit={addNewStory} className="new-entry-form">
                        <h2 className="new-entry-form-title">Tell about your day:</h2>
                        <textarea
                            disabled={loading}
                            onChange={(event) => setContent(event.target.value)}
                            maxLength="1000"
                            className="new-entry-form-input"
                            required/>
                        <button
                            disabled={loading}
                            type="submit"
                            className="new-entry-form-btn">Submit</button>
                    </form>
                </div>
            </div>
            <Loader loading={loading}/>
            {error ? (<ErrorMessage error={error}/>) : null}
        </div>
    )
};
