import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

class User extends React.Component {
  state = {
    name: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/CourtneyJa`).then(res => {
      this.setState({
        name: res.data.name,
        img: res.data.avatar_url,
        bio: res.data.bio,
        followers: res.data.followers,
        following: res.data.following
        //place for calendar?
      });
    })
    .catch (err => console.log (err, 'not working'));
  }

  render(){
      return(
          <div className= 'user-card'>
              <UserCard/>
          </div>
      )
  }
}
