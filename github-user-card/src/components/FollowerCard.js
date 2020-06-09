import React from 'react';

class FollowerCard extends React.Component {
    render() {
        return(
            <div className="followerContainer">
                {this.props.followers.map(follower =>
                    <div className="followerCard">
                        <img src={follower.avatar_url}/>
                        <p className="followerUserName">Follower's Username: {follower.login}</p>
                       <p className="followerProfile">Follower's Profile: <a href={follower.html_url}>{follower.html_url}</a></p> 
                    </div>
                    )}
            </div>
        )
    }
}

export default FollowerCard;