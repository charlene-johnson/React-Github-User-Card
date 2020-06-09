import React from 'react';


class UserCard extends React.Component {
    render() {
        return(
            <div className="userContainer">
                <div className="userCard">
                    <img src={this.props.users.avatar_url}/>
                        <h2>{this.props.users.name}</h2>
                        <p className="userName">Username: {this.props.users.login}</p>
                        <p className="location">Location: {this.props.users.location}</p>
                        <p className="profile">Profile: {this.props.users.html_url}</p>
                        <p className="followers">Followers: {this.props.users.followers}</p>
                        <p className="following">Following: {this.props.users.following}</p>
                        <p className="bios">Bio: {this.props.users.bios}</p>
                </div>
            </div>
        )
    }
}

export default UserCard;