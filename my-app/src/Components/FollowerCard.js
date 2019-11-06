import React from 'react';


const FollowerCard= (props) =>{
    return (
        <div className = 'ppl-card'>
            <img src={props.img} alt = "user-pic"/>
            <h3>Name: {props.followers}</h3>
            <p>Bio: {props.bio}</p>
        </div>
    )
}

export default FollowerCard
