import React from 'react';

class FollowerCard extends React.Component {
    render() {
        return(
            <div className="followerContainer">
                {this.props.followers.map(follower =>
                    <div className="followerCard">
                        <img src={follower.avatar_url}/>
                        <p className="followerUserName">Follower Username: {follower.login}</p>
                        </div>
                        )}
            </div>
        )
    }
}

export default FollowerCard;