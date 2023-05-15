import React from "react";
import "./profileFeed.css"
import {ProfileFeedItem} from "../profileFeedItem/profileFeedItem";


export const ProfileFeed = ({...props}) => {
    const texts = [
        "1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum feugiat augue, at ullamcorper mauris laoreet a. Sed aliquet nibh eget nulla bibendum, in fermentum urna pulvinar.",
        "2) Etiam a lectus vel velit scelerisque efficitur. Nunc sed tellus et ligula cursus iaculis eu ac purus. Fusce at tincidunt ipsum. Nulla facilisi.",
        "3) Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque at tincidunt lectus. Sed pharetra ante vitae velit malesuada, nec bibendum lectus aliquet.",
        "4) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a varius metus. Fusce tempor auctor justo, eu rhoncus dolor cursus sed. Sed auctor tortor ac tempor congue. Proin bibendum nisl justo, vitae laoreet justo varius vitae. Nullam et tellus eu tellus mollis consequat. Sed at ex sem. In malesuada nulla vitae odio tincidunt, eu semper mauris fringilla. Donec non finibus neque. Donec sit amet dui ligula. Phasellus bibendum ultricies justo, ac pharetra risus accumsan nec.",

        "5) Sed lacinia ultricies urna vitae rutrum. Curabitur sit amet arcu nec massa lacinia rhoncus vitae ut augue. Maecenas faucibus urna auctor, facilisis neque ac, pharetra sapien. Sed id arcu in mi volutpat malesuada non eget sem. Vivamus aliquet pellentesque felis vitae viverra. Aenean scelerisque lacus nec condimentum tristique. Cras dictum est vitae ex suscipit auctor. Ut feugiat orci at mi ultrices, et tristique orci dapibus. In posuere malesuada neque, a fermentum tellus tincidunt ac. Quisque sed varius urna, et varius elit. Duis consectetur massa in massa mattis, nec mattis justo vulputate. Sed pretium, ipsum vitae condimentum sagittis, ante metus placerat ipsum, a dictum felis lectus in metus. Duis ut vestibulum tortor. Proin nec quam lobortis, auctor tellus sed, gravida justo.",

        "6) Nulla facilisi. Suspendisse potenti. Quisque nec augue id nulla facilisis rhoncus a ac risus. Etiam mollis bibendum nibh vitae rutrum. Cras mollis, mi ac pharetra laoreet, ligula orci eleifend dolor, eu bibendum turpis lorem at ex. Fusce sit amet orci vel justo feugiat eleifend. Pellentesque nec enim aliquam, luctus mauris a, finibus enim. Maecenas sollicitudin tellus nec lectus facilisis, in volutpat erat dictum. Donec cursus purus a ex interdum, ut fringilla neque volutpat. Morbi non facilisis metus, sit amet fringilla lectus. In vitae lacinia ex, nec aliquam erat. Proin id sem nunc. Cras auctor odio id tellus viverra viverra. Donec nec ultrices leo. Sed quis metus a quam convallis pretium a sit amet nibh.",

        "7) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat, nisl ut scelerisque sollicitudin, neque justo semper enim, non tincidunt turpis tellus sed metus. Mauris vitae vestibulum nisl. Duis vel felis vitae nisi pretium efficitur. Phasellus consectetur, dui eget venenatis scelerisque, risus lacus lacinia est, sed ullamcorper eros arcu et turpis. Integer tristique volutpat elit, non euism"
    ];
    const column1 = texts.filter((text,i) =>{
        if(i%2 === 0)
            return text
        return null
    });
    const column2 = texts.filter((text,i) =>{
        if(i%2 === 1)
            return text
        return null
    });
    console.log("1: " + column1);
    console.log("2: " + column2)
    return (
        <div className="profile-feed content">
            <div className="profile-feed-column">
                {
                    column1.map((text,i)=>{
                        return(
                            <ProfileFeedItem text={text} column={1} key={text}/>
                        )
                    })
                }
            </div>
            <div className="profile-feed-column">
                {
                    column2.map((text,i)=>{
                        return(
                            <ProfileFeedItem text={text} column={2} key={text}/>
                        )
                    })
                }
            </div>
            {/*texts.map((text,i) =>{return(
                <div className="profile-feed-list" >
                    <div className="profile-feed-column column1"key={text}>
                        {i%2 === 1 ? <ProfileFeedItem text={text} key={text}/>: null}
                    </div>
                    <div className="profile-feed-column column2" key={text}>
                        {i%2 === 0 ? <ProfileFeedItem text={text} key={text}/>: null}
                    </div>
                </div>
            )})*/}
        </div>
    )
};