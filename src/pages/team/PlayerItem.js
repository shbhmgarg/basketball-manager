import React from 'react';

const PlayerItem = ({ player }) => {
  return (
    <li className='collection-item'>
      <blockquote>
        <span>{`${player.firstName} ${player.lastName}`}</span>
        <br />
        <span className='grey-text'>
          {player.height} cm | {player.position.join(' | ')}
        </span>
      </blockquote>
    </li>
  );
};

export default PlayerItem;
