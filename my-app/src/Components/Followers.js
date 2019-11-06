import React from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class Followers extends React.Component {
  state = {
    followers: []
  };

  componentDidMount = () => {
    axios
      .get(`https://api.github.com/users/CourtneyJa/followers`)
      .then(res => {
        console.log("my people", res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err, "nope"));
  };

  render() {
    return (
      <div className="follower-card">
        {this.state.followers.map(follower => (
          <FollowerCard
            key={follower.id}
            img={follower.avatar_url}
            bio={follower.bio}
            followers={follower.login}
          />
        ))}
      </div>
    );
  }
}

export default Followers;