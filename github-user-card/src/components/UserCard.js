import React from 'react';


class UserCard extends React.Component {
    render() {
        return(
            <div className="userCardContainer">
                <div className="userCard">
                    <img src={this.props.users.avatar_url}/>
                        <h2>{this.props.users.name}</h2>
                        <p className="userName">Username: {this.props.users.login}</p>
                        <p className="location">Location: {this.props.users.location}</p>
                        <p className="profile">Profile: <a href={this.props.users.html_url}>{this.props.users.html_url}</a></p>
                        <p className="followers">Followers: {this.props.users.followers}</p>
                        <p className="following">Following: {this.props.users.following}</p>
                        <p className="bios">Bio: {this.props.users.bio}</p>
                </div>
            </div>
        )
    }
}

export default UserCard;