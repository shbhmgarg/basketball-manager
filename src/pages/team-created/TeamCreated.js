import React, { useContext, useEffect } from 'react';
import PlayerContext from '../../context/player/playerContext';
import './TeamCreated.css';

const TeamCreated = () => {
  const playerContext = useContext(PlayerContext);
  const { teamSheet, getTeam } = playerContext;

  useEffect(() => {
    getTeam();
    //eslint-disable-next-line
  }, []);

  const populateTeam = () => {
    return teamSheet.map((team) => {
      return (
        <tr key={team.playerId}>
          <td>{team.playerName}</td>
          <td>{team.position}</td>
        </tr>
      );
    });
  };

  return (
    <div className='main-table-div'>
      <div className='row'>
        <div className='col s8 offset-s2'>
          <div className='card' style={{ marginTop: '40px' }}>
            <div className='card-stacked' style={{ padding: '1rem' }}>
              {!teamSheet ? (
                <h4 style={{ textAlign: 'center' }}>
                  There is no team selected
                </h4>
              ) : (
                <>
                  <h4 style={{ textAlign: 'center' }}>Team Selected</h4>
                  <div className='row'>
                    <table className='striped centered responsive-table'>
                      <thead>
                        <tr>
                          <th>Player</th>
                          <th>Position</th>
                        </tr>
                      </thead>

                      <tbody>{populateTeam()}</tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCreated;
