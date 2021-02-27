import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <p>{type}</p>
      <p>{'•••• •••• •••• ' + `${number}`.substr(-4)}</p>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
