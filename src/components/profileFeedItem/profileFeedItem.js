import React from "react";
import "./profileFeedItem.css"


export const ProfileFeedItem = ({...props}) => {
    return (
        <div className={props.column === 1? "feed-item feed-item1" : "feed-item feed-item2"}>
            <p className="feed-item-text feed-item-date">
                28.09.10
            </p>
            <p className="feed-item-text">
                {props.text}
            </p>
        </div>
    )
};