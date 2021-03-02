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
    const COLORS = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return (
      <div>
        <button
          style={{
            backgoundColor: COLORS[this.state.likesCount % COLORS.length],
          }}
          onClick={this.incrementLikesCount}
        >
          {this.state.likesCount} Like {this.state.likesCount !== 1 && 's'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
