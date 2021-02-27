import React from 'react';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div className="information-overview">
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div className="profile-information-text">
        <p>
          <strong>First Name:</strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name:</strong>
          {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toUTCString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
