import React, { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import AddBtn from '../../components/layout/AddBtn';
import PlayerContext from '../../context/player/playerContext';
import PlayerItem from './PlayerItem';

const Team = () => {
  const playerContext = useContext(PlayerContext);
  const { players, getPlayers } = playerContext;

  useEffect(() => {
    getPlayers();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h4 className='center'>Team</h4>
          </li>
          {players.length === 0 ? (
            <p className='center'>No Players to Show. Please add players.</p>
          ) : (
            players.map((player) => (
              <PlayerItem key={player.firstName} player={player} />
            ))
          )}
        </ul>
      </div>
      <AddBtn />
    </div>
  );
};

export default Team;
