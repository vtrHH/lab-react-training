import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0,
    };
  }

  incrementLikesCount = () => {
    this.setState({ likesCount: this.state.likesCount + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementLikesCount}>
          {this.state.likesCount} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
