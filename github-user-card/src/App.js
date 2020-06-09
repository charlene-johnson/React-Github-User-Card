import React from 'react';
import axios from 'axios';
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";


class App extends React.Component {
  state = {
    users: [],
    followers: []
  };
  
  componentDidMount() {
    console.log("ComponentDidMount running");
    axios
      .get("https://api.github.com/users/charlene-johnson")
      .then(res => {
        console.log(res);
        this.setState({users: res.data});
      })
      .catch(err => console.log(err));

      axios
        .get("https://api.github.com/users/charlene-johnson/followers")
        .then(res => {
          console.log(res);
          this.setState({followers: res.data})
        })
        .catch(err => console.log(err));
  };

  render() {
    return(
      <div className="App">
        <div className="title">
          <h1>Github User Card</h1>
        </div>
        <div className="userContainer">
          <UserCard users={this.state.users}/>
        </div>
        <div className="followers">
          <h2>Charlene's Followers</h2>
        </div>
        <div className="followerContainer">
          <FollowerCard followers={this.state.followers}/>
        </div>
      </div>
    )
  }
}
export default App;