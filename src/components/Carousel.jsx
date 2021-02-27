import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  previousImage = () => {
    let index = this.state.currentImageIndex;
    let imagesArrayLength = this.props.imgs.length - 1;

    if (index < 1) {
      index = imagesArrayLength;
      this.setState({ currentImageIndex: index });
    } else {
      this.setState({ currentImageIndex: index - 1 });
    }
  };

  nextImage = () => {
    let index = this.state.currentImageIndex;
    let imagesArrayLength = this.props.imgs.length;

    if (index === imagesArrayLength - 1) {
      index = 0;
      this.setState({ currentImageIndex: index });
    } else {
      this.setState({ currentImageIndex: index + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.previousImage}>Left</button>
        <img
          src={this.props.imgs[this.state.currentImageIndex]}
          alt="profile"
        />
        <button onClick={this.nextImage}>Right</button>
      </div>
    );
  }
}

export default Carousel;
