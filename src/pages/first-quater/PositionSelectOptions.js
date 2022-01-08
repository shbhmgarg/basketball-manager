import React from 'react';

const PositionSelectOptions = ({ positionArray }) => {
  return positionArray && positionArray.length !== 0
    ? positionArray.map((position) => (
        <option key={position} value={position}>
          {position}
        </option>
      ))
    : '';
};

export default PositionSelectOptions;
