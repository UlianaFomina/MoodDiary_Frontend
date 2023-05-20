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

    const renderColumns = (stories) => {
        let columnData = [];
        for(let i = 1; i <= 2; i++) {
            columnData.push(
                <div className="profile-feed-column">
                    {viewStories(stories, i)}
                </div>
            )
        }

        return columnData
    }

    return (
        <div className="profile-feed content">
            {renderColumns(stories)}
        </div>
    )
};
