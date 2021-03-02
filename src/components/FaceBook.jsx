import React from 'react';
import profiles from '../data/berlin.json';

console.log(profiles);

class FaceBook extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {profiles.map((profile) => {
            return (
              <li key={profile.firstName}>
                {profile.firstName} {profile.lastName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FaceBook;
