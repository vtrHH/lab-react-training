import React from 'react';

const BoxColor = ({ r, g, b }) => {
  return (
    <div
      className="information-overview"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      rgb({r}, {g}, {b})
    </div>
  );
};

export default BoxColor;
