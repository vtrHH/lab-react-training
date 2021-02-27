import React from 'react';

const Random = ({ min, max }) => {
  let minimum = Math.ceil(min);
  let maximum = Math.floor(max);
  return (
    <div className="information-overview">
      <p>
        Random value between {min} and {max} =>{' '}
        {Math.floor(Math.random() * (maximum - minimum)) + minimum}
      </p>
    </div>
  );
};

export default Random;
