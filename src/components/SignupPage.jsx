import React from 'react';

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    nationality: 'de',
  };

  handleGenericChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { email, password, nationality } = this.state;
    alert(`Form was submitted with ${email}, ${password}, ${nationality}`);
  };

  render() {
    const passwordIsValid = this.state.password.length >= 7;
    // const emailIsValid
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="email-input">Email</label>
          <input
            type="text"
            id="email-input"
            name="email"
            value={this.state.email}
            placeholder="Your Email-Adress"
            onChange={this.handleGenericChange}
          />
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            value={this.state.password}
            placeholder="Your Password"
            onChange={this.handleGenericChange}
          />
          {!passwordIsValid && <small>Your password is too weak</small>}

          <label htmlFor="nationality-input">Nationality</label>
          <select
            id="nationality-input"
            name="nationality"
            value={this.state.value}
            onChange={this.handleGenericChange}
          >
            <option value="en">UK</option>
            <option selected value="de">
              Germany
            </option>
            <option value="fr">France</option>
          </select>
          <button>Sign up</button>
        </form>

        <hr />

        <p>in progress - language</p>
        <p>Your email is {this.state.email}.</p>
        <p>Your nationality is {this.state.nationality}.</p>
        <p>Your password is {this.state.password.length} characters long.</p>
        <p>Your email is correct</p>
      </div>
    );
  }
}

export default SignupPage;
