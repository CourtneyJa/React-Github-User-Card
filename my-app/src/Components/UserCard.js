import React from 'react';


const UserCard = (props) =>{
    return (
        <div className = 'user-card'>
            <img src={props.img} alt = "user-pic"/>
            <h3>Name: {props.user}</h3>
            <p>Bio: {props.bio}</p>
            <p># of Followers: {props.followers}</p>
            <p># Following: {props.following}</p>
        </div>
    )
}

export default UserCard
