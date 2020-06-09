import React from 'react';


class UserCard extends React.Component {
   
    render() {
        return(
            <div className="userCardContainer">
                <div className="userCard">
                    <img className="myPic" width="20%" src={this.props.users.avatar_url}/>
                    <div className="info">
                        <h2>{this.props.users.name}</h2>
                        <p>Username: {this.props.users.login}</p>
                        <p>Location: {this.props.users.location}</p>
                        <p>Profile: <a href={this.props.users.html_url}>{this.props.users.html_url}</a></p>
                        <p>Followers: {this.props.users.followers}</p>
                        <p>Following: {this.props.users.following}</p>
                        <p>Bio: {this.props.users.bio}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;