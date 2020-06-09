import React from 'react';
import axios from 'axios';

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
        this.setState({user: res.data});
      })
      .catch(err => console.log(err));

      axios
        .get("https://api.github.com/users/charlene-johnson")
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
      </div>
    )
  }
}
export default App;