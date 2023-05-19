import React from "react";
import "./profileFeedItem.css"


export const ProfileFeedItem = ({story, column}) => {
    console.log(column)
    return (
        <div className={column === 1 ? "feed-item feed-item1" : "feed-item feed-item2"}>
            <p className="feed-item-text feed-item-date">
                {story.createdAt}
            </p>
            <p className="feed-item-text">
                {story.content}
            </p>
        </div>
    )
};
