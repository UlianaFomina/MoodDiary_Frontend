import React from "react";
import "./mainInfo.css"

export const MainInfo = ({...props}) => {
    return (
        <div className="main-info content">
            <div className="main-info-list">
                <div className="main-info-list-wrap">
                    <div className="main-info-item item1">
                        <svg viewBox="10 10 48 48" className="main-info-list-svg svg1">
                            <title>arrow-2</title>
                            <path
                                d="M51.08,26.7c-.75-.31-2.62,2.19-3.62,2.94a42.32,42.32,0,0,1-16.88,5.93,22,22,0,0,1-14.19-3.12c-.25-.19,2.19-2.63,1.94-3S11.08,27.76,10.71,28s2.71,7.81,3,7.69a16.36,16.36,0,0,0,1.75-2.25,12.62,12.62,0,0,0,2.62,1.81c1.81,1,3.06,2.13,14.06,2.06s20.44-7.06,21.07-7.87S51.83,27,51.08,26.7ZM16.14,30.41c-.37.37-1.75,3-2.08,2.87a22.87,22.87,0,0,1-1.75-4C12.31,29.06,16.52,30,16.14,30.41Z"/>
                        </svg>
                        <p className="main-info-item-text">
                            Here you can return to the main page.
                        </p>
                    </div>
                    <div className="main-info-item item2">
                        <svg className="main-info-list-svg svg2" viewBox="10 10 48 48">
                            <path
                                d="M41.91,24.25c-.81-.31-.94,0-2.5.63S26.16,30.57,18.1,36.82s-5.63,7.37-5.63,7.37c.19.06.94.81,1.63.81s.5-.06,1.5-1.75,1.62-2.81,8.81-8.37S41.6,26,42.47,25.57,42.72,24.57,41.91,24.25Zm9.94-3c-.44-.56-8.8-2.82-9.31-2.12-.88,1.19,2.56,8.62,3.31,9.31S52.29,21.82,51.85,21.25ZM46,25.69c-.5-.62-2.07-4.94-1.88-5.12.53-.54,5.69.87,5.44,1.5S46.54,26.32,46,25.69Z"/>
                        </svg>
                        <p className="main-info-item-text">
                            Here you can create a new entry about how you spent your day!
                        </p>
                    </div>
                    <div className="main-info-item item3">
                        <svg viewBox="10 0 48 48" className="main-info-list-svg svg3">
                            <title>arrow-2</title>
                            <path
                                d="M51.08,26.7c-.75-.31-2.62,2.19-3.62,2.94a42.32,42.32,0,0,1-16.88,5.93,22,22,0,0,1-14.19-3.12c-.25-.19,2.19-2.63,1.94-3S11.08,27.76,10.71,28s2.71,7.81,3,7.69a16.36,16.36,0,0,0,1.75-2.25,12.62,12.62,0,0,0,2.62,1.81c1.81,1,3.06,2.13,14.06,2.06s20.44-7.06,21.07-7.87S51.83,27,51.08,26.7ZM16.14,30.41c-.37.37-1.75,3-2.08,2.87a22.87,22.87,0,0,1-1.75-4C12.31,29.06,16.52,30,16.14,30.41Z"/>
                        </svg>
                        <p className="main-info-item-text">
                            See your mood stats here!
                        </p>
                    </div>
                </div>
                <div className="main-info-list-wrap">
                    <div className="main-info-item item4">
                        <svg className="main-info-list-svg svg4" viewBox="10 10 48 48">
                            <path
                                d="M41.91,24.25c-.81-.31-.94,0-2.5.63S26.16,30.57,18.1,36.82s-5.63,7.37-5.63,7.37c.19.06.94.81,1.63.81s.5-.06,1.5-1.75,1.62-2.81,8.81-8.37S41.6,26,42.47,25.57,42.72,24.57,41.91,24.25Zm9.94-3c-.44-.56-8.8-2.82-9.31-2.12-.88,1.19,2.56,8.62,3.31,9.31S52.29,21.82,51.85,21.25ZM46,25.69c-.5-.62-2.07-4.94-1.88-5.12.53-.54,5.69.87,5.44,1.5S46.54,26.32,46,25.69Z"/>
                        </svg>
                        <p className="main-info-item-text">
                            Here you can see your profile data, also see your latest posts and statistics!
                        </p>
                    </div>
                    <div className="main-info-item item5">
                        <svg viewBox="10 0 48 48" className="main-info-list-svg svg5">
                            <title>arrow-2</title>
                            <path
                                d="M51.08,26.7c-.75-.31-2.62,2.19-3.62,2.94a42.32,42.32,0,0,1-16.88,5.93,22,22,0,0,1-14.19-3.12c-.25-.19,2.19-2.63,1.94-3S11.08,27.76,10.71,28s2.71,7.81,3,7.69a16.36,16.36,0,0,0,1.75-2.25,12.62,12.62,0,0,0,2.62,1.81c1.81,1,3.06,2.13,14.06,2.06s20.44-7.06,21.07-7.87S51.83,27,51.08,26.7ZM16.14,30.41c-.37.37-1.75,3-2.08,2.87a22.87,22.87,0,0,1-1.75-4C12.31,29.06,16.52,30,16.14,30.41Z"/>
                        </svg>
                        <p className="main-info-item-text">
                           Go to logout page :(
                        </p>
                    </div>
                </div>
            </div>
            <div className="main-info-lib">
                <p className="main-info-lib-text lib-text1">
                    Analyzing text data using Stanford’s CoreNLP makes text data analysis easy and efficient. The scale for sentiment values ranges from zero to four.
                    Zero means that the sentence is very negative while four means it’s extremely positive. As you can see, CoreNLP did a very good job.
                </p>
                <p className="main-info-lib-text lib-text2">
                    Analyzing text data using Stanford’s CoreNLP makes text data analysis easy and efficient. The scale for sentiment values ranges from zero to four.
                    Zero means that the sentence is very negative while four means it’s extremely positive. As you can see, CoreNLP did a very good job.
                </p>
            </div>
        </div>
    )
};