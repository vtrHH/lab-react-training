import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  toggleImage = () => {
    setTimeout(() => {
      this.setState({ active: !this.state.active });
    }, 1000);
  };

  getRandomNumber = () => {
    return Math.floor(Math.random() * (6 - 1)) + 1;
  };

  render() {
    return (
      <div>
        <img
          className="dice"
          onClick={this.toggleImage}
          src={
            './img/dice' +
            (this.state.active
              ? this.getRandomNumber()
              : this.getRandomNumber()) +
            '.png'
          }
          alt="Dice"
        />
      </div>
    );
  }
}
export default Dice;
