import React from 'react';

const fillArray = (limit) => {
  let numbers = [];
  let maximum = limit;
  for (let i = 0; i < maximum; i++) {
    numbers.push(i + 1);
  }
  return numbers;
};

const NumbersTable = (props) => {
  const numbers = fillArray(props.limit);
  const calculation = (value) => value % 2;
  const bgColor = (value) => (calculation(value) === 0 ? 'red' : 'white');
  return (
    <div>
      <ul className="numbers-list">
        {numbers.map((number) => {
          return (
            <li
              style={{ backgroundColor: bgColor(number) }}
              className="numbers-list-item"
              key={number}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NumbersTable;
