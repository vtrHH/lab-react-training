import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  toggleImage = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.toggleImage}
          src={
            './img/persons/' +
            (this.state.active ? 'maxence' : 'maxence-glasses') +
            '.png'
          }
          alt="Maxene"
        />
      </div>
    );
  }
}

export default ClickablePicture;
