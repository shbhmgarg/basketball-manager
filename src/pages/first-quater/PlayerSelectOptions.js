import React from 'react';

const PlayerSelectOptions = ({ players }) => {
  return players.length !== 0
    ? players.map(({ firstName, lastName, id }) => (
        <option key={id} value={id}>
          {firstName} {lastName}
        </option>
      ))
    : '';
};

export default PlayerSelectOptions;
