import React from 'react';

const checkLanguage = (language) => {
  switch (language) {
    case 'de':
      return 'Hallo';
      break;
    case 'fr':
      return 'Bonjour';
      break;
    case 'es':
      return 'Hola';
      break;
    default:
      return 'Hi';
  }
};

const Greetings = (props) => {
  return (
    <div className="information-overview">
      <p>
        {checkLanguage(props.lang)} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
