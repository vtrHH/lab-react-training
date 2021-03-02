import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {profiles.map((profile) => {
            console.log(profile.isStudent);
            return (
              <li className="profiles-overview" key={profile.firstName}>
                <div>
                  <img
                    className="profiles-image"
                    src={profile.img}
                    alt={profile.firstName}
                  />
                </div>
                <strong>First Name: </strong>
                {profile.firstName} <br />
                <strong>Last Name: </strong>
                {profile.lastName} <br />
                <strong>Country: </strong>
                {profile.country} <br />
                <strong>
                  Type: {profile.isStudent ? 'Student' : 'Teacher'}
                </strong>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FaceBook;
