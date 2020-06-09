import React from 'react';

class FollowerCard extends React.Component {
    render() {
        return(
            <div className="followerContainer">
                {this.props.followers.map(follower =>
                    <div className="followerCard">
                        <img className="followerPic" width="18%"src={follower.avatar_url}/>
                        <div className="info Followers">
                            <p>Follower's Username: {follower.login}</p>
                            <p>Follower's Profile: <a href={follower.html_url}>{follower.html_url}</a></p> 
                        </div>
                    </div>
                    )}
            </div>
        )
    }
}

export default FollowerCard;