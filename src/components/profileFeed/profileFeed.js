import React from "react";
import "./profileFeed.css"
import {ProfileFeedItem} from "../profileFeedItem/profileFeedItem";


export const ProfileFeed = ({stories}) => {

    const viewStories = (stories, column) => {
        if(stories != null) {
            return stories.filter((story, index) => index % 2 === column - 1).map((story) => {
                return (
                    <ProfileFeedItem story={story} column={column} key={story}/>
                )
            });
        }
    }

    return (
        <div className="profile-feed content">
            <div className="profile-feed-column">
                {viewStories(stories, 1)}
            </div>
            <div className="profile-feed-column">
                {viewStories(stories, 2)}
            </div>
        </div>
    )
};
