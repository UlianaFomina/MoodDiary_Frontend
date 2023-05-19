import React from "react";
import "./profileFeedItem.css"


export const ProfileFeedItem = ({story, column}) => {
    const date = new Date(story.createdAt);
    const createdAt = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    return (
        <div className={column === 1 ? "feed-item feed-item1" : "feed-item feed-item2"}>
            <p className="feed-item-text feed-item-date">
                {createdAt}
            </p>
            <p className="feed-item-text">
                {story.content}
            </p>
        </div>
    )
};
