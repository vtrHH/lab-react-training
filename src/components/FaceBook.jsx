import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
  state = {
    profiles: profiles,
    selectedCountry: null,
  };

  handleCountrySelect = (country) => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const selectedCountry = this.state.selectedCountry;
    const countries = [];

    for (let profile of this.state.profiles) {
      const country = profile.country;
      if (!countries.includes(country)) {
        countries.push(country);
      }
    }

    /* const countries = this.state.profiles.reduce(
      (uniqueCoutries, { country }) => {
       uniqueCoutries.includes(country) ? uniqueCoutries : [...uniqueCoutries, country],
      []
    ); */

    return (
      <div>
        <div>
          <button
            onClick={() => this.handleCountrySelect(null)}
            className={!selectedCountry && 'highlighted'}
          >
            All
          </button>
          {countries.map((country) => (
            <button
              onClick={() => this.handleCountrySelect(country)}
              className={selectedCountry === country && 'highlighted'}
            >
              {country}
            </button>
          ))}
        </div>
        {this.state.profiles.map((profile) => (
          <div
            className={
              'information-overview' +
              (!selectedCountry || selectedCountry === profile.country
                ? 'highlighted'
                : '')
            }
            key={profile.img}
          >
            <div>
              <img
                className="profiles-image"
                src={profile.img}
                alt={profile.firstName + ' ' + profile.lastName}
              />
            </div>
            <div className="profile-information-text">
              <p>
                <strong>First Name:</strong>
                {profile.firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong> {profile.country}
              </p>
              <p>
                <strong>Type: </strong>
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FaceBook;
