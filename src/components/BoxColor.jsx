import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const averageLightness =
    [r, g, b].reduce((total, value) => total + value, 0) / 3;
  const textColor = averageLightness > 255 / 2 ? 'black' : 'white';
  return (
    <div
      className="information-overview"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: 16,
        color: textColor,
      }}
    >
      rgb({r}, {g}, {b})
    </div>
  );
};

export default BoxColor;
