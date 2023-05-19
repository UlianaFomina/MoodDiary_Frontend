import React, {useEffect, useState} from "react";
import "./profileFeed.css"
import {ProfileFeedItem} from "../profileFeedItem/profileFeedItem";
import {getPostsByUserId} from "../../service/story";


export const ProfileFeed = ({...props}) => {
    const [stories, setStories] = useState([])
    const userId = sessionStorage.getItem("id");

    useEffect(() => {
        const storiesFetch = async () => {
            const stories = await getPostsByUserId(userId)
            setStories(stories)
        }

        storiesFetch();
    }, [])

    const viewStories = (stories, column) => {
        return stories.filter((story, index) => index % 2 === column - 1).map((story, index) => {
            return (
                <ProfileFeedItem story={story} column={column} key={story}/>
            )
        });
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
