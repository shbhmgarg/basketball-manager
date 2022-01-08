import React, { useContext, useState, useEffect } from 'react';
import PlayerContext from '../../context/player/playerContext';
import PlayerSelectOptions from './PlayerSelectOptions';
import PositionSelectOptions from './PositionSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import './FirstQuater.css';

const FirstQuater = () => {
  const [playerOne, setPlayerOne] = useState('');
  const [playerOneError, setPlayerOneError] = useState('');
  const [positionOne, setPositionOne] = useState('');
  const [positionOneError, setPositionOneError] = useState('');
  const [positionOneArray, setPositionOneArray] = useState([]);
  const [playerTwo, setPlayerTwo] = useState('');
  const [playerTwoError, setPlayerTwoError] = useState('');
  const [positionTwo, setPositionTwo] = useState('');
  const [positionTwoError, setPositionTwoError] = useState('');
  const [positionTwoArray, setPositionTwoArray] = useState([]);
  const [playerThree, setPlayerThree] = useState('');
  const [playerThreeError, setPlayerThreeError] = useState('');
  const [positionThree, setPositionThree] = useState('');
  const [positionThreeError, setPositionThreeError] = useState('');
  const [positionThreeArray, setPositionThreeArray] = useState([]);
  const [playerFour, setPlayerFour] = useState('');
  const [playerFourError, setPlayerFourError] = useState('');
  const [positionFour, setPositionFour] = useState('');
  const [positionFourError, setPositionFourError] = useState('');
  const [positionFourArray, setPositionFourArray] = useState([]);
  const [playerFive, setPlayerFive] = useState('');
  const [positionFive, setPositionFive] = useState('');
  const [positionFiveError, setPositionFiveError] = useState('');
  const [playerFiveError, setPlayerFiveError] = useState('');
  const [positionFiveArray, setPositionFiveArray] = useState([]);

  const playerContext = useContext(PlayerContext);
  const { players, saveTeam, teamSheet, getTeam } = playerContext;

  useEffect(() => {
    getTeam();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!teamSheet) return;
    setPlayerOne(teamSheet[0].playerId);
    const playerOneSelected = players.filter(
      (player) => player.id === teamSheet[0].playerId
    );
    setPositionOneArray(playerOneSelected[0].position);
    setPositionOne(teamSheet[0].position);

    setPlayerTwo(teamSheet[1].playerId);
    const playerTwoSelected = players.filter(
      (player) => player.id === teamSheet[1].playerId
    );
    setPositionTwoArray(playerTwoSelected[0].position);
    setPositionTwo(teamSheet[1].position);

    setPlayerThree(teamSheet[2].playerId);
    const playerThreeSelected = players.filter(
      (player) => player.id === teamSheet[2].playerId
    );
    setPositionThreeArray(playerThreeSelected[0].position);
    setPositionThree(teamSheet[2].position);

    setPlayerFour(teamSheet[3].playerId);
    const playerFourSelected = players.filter(
      (player) => player.id === teamSheet[3].playerId
    );
    setPositionFourArray(playerFourSelected[0].position);
    setPositionFour(teamSheet[3].position);

    setPlayerFive(teamSheet[4].playerId);
    const playerFiveSelected = players.filter(
      (player) => player.id === teamSheet[4].playerId
    );
    setPositionFiveArray(playerFiveSelected[0].position);
    setPositionFive(teamSheet[4].position);
    // eslint-disable-next-line
  }, [teamSheet]);

  const validatePlayerOne = (playerOneValue) => {
    if (playerOneValue !== '') playerOneValue = parseInt(playerOneValue);
    const errorMsg = 'Player can only be selected once';
    if (playerOneValue === '') {
      setPlayerOneError('Player 1 is mandatory');
      return false;
    } else if (playerOneValue === playerThree) {
      setPlayerOneError(errorMsg);
      return false;
    } else if (playerOneValue === playerFour) {
      setPlayerOneError(errorMsg);
      return false;
    } else if (playerOneValue === playerFive) {
      setPlayerOneError(errorMsg);
      return false;
    } else if (playerOneValue === playerTwo) {
      setPlayerOneError(errorMsg);
    } else {
      setPlayerOneError('');
      return true;
    }
  };

  const validatePlayerTwo = (playerTwoValue) => {
    if (playerTwoValue !== '') playerTwoValue = parseInt(playerTwoValue);
    const errorMsg = 'Player can only be selected once';
    if (playerTwoValue === '') {
      setPlayerTwoError('Player 2 is mandatory');
      return false;
    } else if (playerTwoValue === playerThree) {
      setPlayerTwoError(errorMsg);
      return false;
    } else if (playerTwoValue === playerFour) {
      setPlayerTwoError(errorMsg);
      return false;
    } else if (playerTwoValue === playerFive) {
      setPlayerTwoError(errorMsg);
      return false;
    } else if (playerTwoValue === playerOne) {
      setPlayerTwoError(errorMsg);
      return false;
    } else {
      setPlayerTwoError('');
      return true;
    }
  };

  const validatePlayerThree = (playerThreeValue) => {
    if (playerThreeValue !== '') playerThreeValue = parseInt(playerThreeValue);
    const errorMsg = 'Player can only be selected once';
    if (playerThreeValue === '') {
      setPlayerThreeError('Player 3 is mandatory');
      return false;
    } else if (playerThreeValue === playerTwo) {
      setPlayerThreeError(errorMsg);
      return false;
    } else if (playerThreeValue === playerFour) {
      setPlayerThreeError(errorMsg);
      return false;
    } else if (playerThreeValue === playerFive) {
      setPlayerThreeError(errorMsg);
      return false;
    } else if (playerThreeValue === playerOne) {
      setPlayerThreeError(errorMsg);
      return false;
    } else {
      setPlayerThreeError('');
      return true;
    }
  };

  const validatePlayerFour = (playerFourValue) => {
    if (playerFourValue !== '') playerFourValue = parseInt(playerFourValue);
    const errorMsg = 'Player can only be selected once';
    if (playerFourValue === '') {
      setPlayerFourError('Player 4 is mandatory');
      return false;
    } else if (playerFourValue === playerTwo) {
      setPlayerFourError(errorMsg);
      return false;
    } else if (playerFourValue === playerThree) {
      setPlayerFourError(errorMsg);
      return false;
    } else if (playerFourValue === playerFive) {
      setPlayerFourError(errorMsg);
      return false;
    } else if (playerFourValue === playerOne) {
      setPlayerFourError(errorMsg);
      return false;
    } else {
      setPlayerFourError('');
      return true;
    }
  };

  const validatePlayerFive = (playerFiveValue) => {
    if (playerFiveValue !== '') playerFiveValue = parseInt(playerFiveValue);
    const errorMsg = 'Player can only be selected once';
    if (playerFiveValue === '') {
      setPlayerFiveError('Player 5 is mandatory');
      return false;
    } else if (playerFiveValue === playerTwo) {
      setPlayerFiveError(errorMsg);
      return false;
    } else if (playerFiveValue === playerThree) {
      setPlayerFiveError(errorMsg);
      return false;
    } else if (playerFiveValue === playerFour) {
      setPlayerFiveError(errorMsg);
      return false;
    } else if (playerFiveValue === playerOne) {
      setPlayerFiveError(errorMsg);
      return false;
    } else {
      setPlayerFiveError('');
      return true;
    }
  };

  const playerChange = (e) => {
    if (e.target.name === 'playerOne') {
      if (validatePlayerOne(e.target.value)) {
        setPlayerOne(parseInt(e.target.value));
        const selectedPlayer = players.filter((player) => {
          return player.id === parseInt(e.target.value);
        });
        setPositionOneArray(selectedPlayer[0].position);
      } else {
        setPlayerOne('');
        setPositionOneArray([]);
        setPositionOne('');
      }
    } else if (e.target.name === 'playerTwo') {
      if (validatePlayerTwo(e.target.value)) {
        setPlayerTwo(parseInt(e.target.value));
        const selectedPlayer = players.filter((player) => {
          return player.id === parseInt(e.target.value);
        });
        setPositionTwoArray(selectedPlayer[0].position);
      } else {
        setPlayerTwo('');
        setPositionTwoArray([]);
        setPositionTwo('');
      }
    } else if (e.target.name === 'playerThree') {
      if (validatePlayerThree(e.target.value)) {
        setPlayerThree(parseInt(e.target.value));
        const selectedPlayer = players.filter((player) => {
          return player.id === parseInt(e.target.value);
        });
        setPositionThreeArray(selectedPlayer[0].position);
      } else {
        setPlayerThree('');
        setPositionThreeArray([]);
        setPositionThree('');
      }
    } else if (e.target.name === 'playerFour') {
      if (validatePlayerFour(e.target.value)) {
        setPlayerFour(parseInt(e.target.value));
        const selectedPlayer = players.filter((player) => {
          return player.id === parseInt(e.target.value);
        });
        setPositionFourArray(selectedPlayer[0].position);
      } else {
        setPlayerFour('');
        setPositionFourArray([]);
        setPositionFour('');
      }
    } else if (e.target.name === 'playerFive') {
      if (validatePlayerFive(e.target.value)) {
        setPlayerFive(parseInt(e.target.value));
        const selectedPlayer = players.filter((player) => {
          return player.id === parseInt(e.target.value);
        });
        setPositionFiveArray(selectedPlayer[0].position);
      } else {
        setPlayerFive('');
        setPositionFiveArray([]);
        setPositionFive('');
      }
    }
  };

  const validatePositionOne = (positionOneValue) => {
    const errorMsg = 'Position can only be selected once';
    if (positionOneValue === '') {
      setPositionOneError('Position 1 is mandatory');
      return false;
    } else if (positionOneValue === positionThree) {
      setPositionOneError(errorMsg);
      return false;
    } else if (positionOneValue === positionFour) {
      setPositionOneError(errorMsg);
      return false;
    } else if (positionOneValue === positionFive) {
      setPositionOneError(errorMsg);
      return false;
    }
    if (positionOneValue === positionTwo) {
      setPositionOneError(errorMsg);
      return false;
    } else {
      setPositionOneError('');
      return true;
    }
  };

  const validatePositionTwo = (positionTwoValue) => {
    const errorMsg = 'Position can only be selected once';
    if (positionTwoValue === '') {
      setPositionTwoError('Position 2 is mandatory');
      return false;
    } else if (positionTwoValue === positionThree) {
      setPositionTwoError(errorMsg);
      return false;
    } else if (positionTwoValue === positionFour) {
      setPositionTwoError(errorMsg);
      return false;
    } else if (positionTwoValue === positionFive) {
      setPositionTwoError(errorMsg);
      return false;
    } else if (positionTwoValue === positionOne) {
      setPositionTwoError(errorMsg);
      return false;
    } else {
      setPositionTwoError('');
      return true;
    }
  };

  const validatePositionThree = (positionThreeValue) => {
    const errorMsg = 'Position can only be selected once';
    if (positionThreeValue === '') {
      setPositionThreeError('Position 3 is mandatory');
      return false;
    } else if (positionThreeValue === positionTwo) {
      setPositionThreeError(errorMsg);
      return false;
    } else if (positionThreeValue === positionFour) {
      setPositionThreeError(errorMsg);
      return false;
    } else if (positionThreeValue === positionFive) {
      setPositionThreeError(errorMsg);
      return false;
    } else if (positionThreeValue === positionOne) {
      setPositionThreeError(errorMsg);
      return false;
    } else {
      setPositionThreeError('');
      return true;
    }
  };

  const validatePositionFour = (positionFourValue) => {
    const errorMsg = 'Position can only be selected once';
    if (positionFourValue === '') {
      setPositionFourError('Position 4 is mandatory');
      return false;
    } else if (positionFourValue === positionTwo) {
      setPositionFourError(errorMsg);
      return false;
    } else if (positionFourValue === positionThree) {
      setPositionFourError(errorMsg);
      return false;
    } else if (positionFourValue === positionFive) {
      setPositionFourError(errorMsg);
      return false;
    } else if (positionFourValue === positionOne) {
      setPositionFourError(errorMsg);
      return false;
    } else {
      setPositionFourError('');
      return true;
    }
  };

  const validatePositionFive = (positionFiveValue) => {
    const errorMsg = 'Position can only be selected once';
    if (positionFiveValue === '') {
      setPositionFiveError('Position 5 is mandatory');
      return false;
    } else if (positionFiveValue === positionTwo) {
      setPositionFiveError(errorMsg);
      return false;
    } else if (positionFiveValue === positionThree) {
      setPositionFiveError(errorMsg);
      return false;
    } else if (positionFiveValue === positionFour) {
      setPositionFiveError(errorMsg);
      return false;
    } else if (positionFiveValue === positionOne) {
      setPositionFiveError(errorMsg);
      return false;
    } else {
      setPositionFiveError('');
      return true;
    }
  };

  const positionChange = (e) => {
    if (e.target.name === 'positionOne') {
      if (validatePositionOne(e.target.value)) {
        setPositionOne(e.target.value);
      } else {
        setPositionOne('');
      }
    } else if (e.target.name === 'positionTwo') {
      if (validatePositionTwo(e.target.value)) {
        setPositionTwo(e.target.value);
      } else {
        setPositionTwo('');
      }
    } else if (e.target.name === 'positionThree') {
      if (validatePositionThree(e.target.value)) {
        setPositionThree(e.target.value);
      } else {
        setPositionThree('');
      }
    } else if (e.target.name === 'positionFour') {
      if (validatePositionFour(e.target.value)) {
        setPositionFour(e.target.value);
      } else {
        setPositionFour('');
      }
    } else if (e.target.name === 'positionFive') {
      if (validatePositionFive(e.target.value)) {
        setPositionFive(e.target.value);
      } else {
        setPositionFive('');
      }
    }
  };

  const submitTeam = (e) => {
    e.preventDefault();
    const isP1Valid = validatePlayerOne(playerOne);
    const isP2Valid = validatePlayerTwo(playerTwo);
    const isP3Valid = validatePlayerThree(playerThree);
    const isP4Valid = validatePlayerFour(playerFour);
    const isP5Valid = validatePlayerFive(playerFive);
    const isPosition1Valid = validatePositionOne(positionOne);
    const isPosition2Valid = validatePositionTwo(positionTwo);
    const isPosition3Valid = validatePositionThree(positionThree);
    const isPosition4Valid = validatePositionFour(positionFour);
    const isPosition5Valid = validatePositionFive(positionFive);
    if (
      isP1Valid &&
      isPosition1Valid &&
      isP2Valid &&
      isPosition2Valid &&
      isP3Valid &&
      isPosition3Valid &&
      isP4Valid &&
      isPosition4Valid &&
      isP5Valid &&
      isPosition5Valid
    ) {
      const teamSelected = [
        { playerId: parseInt(playerOne), position: positionOne },
        { playerId: parseInt(playerTwo), position: positionTwo },
        { playerId: parseInt(playerThree), position: positionThree },
        { playerId: parseInt(playerFour), position: positionFour },
        { playerId: parseInt(playerFive), position: positionFive }
      ];
      saveTeam(teamSelected);
      M.toast({ html: 'Team Saved Successfully!!' });
    } else {
      M.toast({ html: 'Please fix all the errors' });
    }
  };

  const resetTeam = () => {
    setPlayerOne('');
    setPlayerOneError('');
    setPositionOneArray([]);
    setPositionOne('');
    setPositionOneError('');
    setPlayerTwo('');
    setPlayerTwoError('');
    setPositionTwoArray([]);
    setPositionTwo('');
    setPositionTwoError('');
    setPlayerThree('');
    setPlayerThreeError('');
    setPositionThreeArray([]);
    setPositionThree('');
    setPositionThreeError('');
    setPlayerFour('');
    setPlayerFourError('');
    setPositionFourArray([]);
    setPositionFour('');
    setPositionFourError('');
    setPlayerFive('');
    setPlayerFiveError('');
    setPositionFiveArray([]);
    setPositionFive('');
    setPositionFiveError('');
    localStorage.setItem('team', null);
    saveTeam(null);
    alert();
    M.toast({ html: 'Team resetted' });
  };

  return (
    <div className='row bg-image'>
      <div className='col s6 offset-s3'>
        <div className='card' style={{ marginTop: '40px' }}>
          <div className='card-stacked'>
            {players.length < 5 ? (
              <div className='card-content'>
                <h6 style={{ textAlign: 'center' }}>
                  There should be atleast 5 players to field a team. Please add
                  more players.
                </h6>
              </div>
            ) : (
              <>
                <div className='card-content' style={{}}>
                  <h4 style={{ textAlign: 'center' }}>First Quater Team</h4>
                  <div className='row' style={{ marginBottom: '0px' }}>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='playerOne'
                        value={playerOne}
                        className={`browser-default ${
                          playerOneError ? 'invalid-select' : ''
                        }`}
                        onChange={playerChange}
                      >
                        <option value='' disabled>
                          Choose Player 1
                        </option>
                        <PlayerSelectOptions players={players} />
                      </select>
                      {playerOneError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {playerOneError}
                        </span>
                      )}
                    </div>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='positionOne'
                        value={positionOne}
                        className={`browser-default ${
                          positionOneError ? 'invalid-select' : ''
                        }`}
                        onChange={positionChange}
                      >
                        <option value='' disabled>
                          Choose Position
                        </option>
                        <PositionSelectOptions
                          positionArray={positionOneArray}
                        />
                      </select>
                      {positionOneError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {positionOneError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='row' style={{ marginBottom: '0px' }}>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='playerTwo'
                        value={playerTwo}
                        className={`browser-default ${
                          playerTwoError ? 'invalid-select' : ''
                        }`}
                        onChange={playerChange}
                      >
                        <option value='' disabled>
                          Choose Player 2
                        </option>
                        <PlayerSelectOptions players={players} />
                      </select>
                      {playerTwoError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {playerTwoError}
                        </span>
                      )}
                    </div>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='positionTwo'
                        value={positionTwo}
                        className={`browser-default ${
                          positionTwoError ? 'invalid-select' : ''
                        }`}
                        onChange={positionChange}
                      >
                        <option value='' disabled>
                          Choose Position
                        </option>
                        <PositionSelectOptions
                          positionArray={positionTwoArray}
                        />
                      </select>
                      {positionTwoError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {positionTwoError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='row' style={{ marginBottom: '0px' }}>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='playerThree'
                        value={playerThree}
                        className={`browser-default ${
                          playerThreeError ? 'invalid-select' : ''
                        }`}
                        onChange={playerChange}
                      >
                        <option value='' disabled>
                          Choose Player 3
                        </option>
                        <PlayerSelectOptions players={players} />
                      </select>
                      {playerThreeError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {playerThreeError}
                        </span>
                      )}
                    </div>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='positionThree'
                        value={positionThree}
                        className={`browser-default ${
                          positionThreeError ? 'invalid-select' : ''
                        }`}
                        onChange={positionChange}
                      >
                        <option value='' disabled>
                          Choose Position
                        </option>
                        <PositionSelectOptions
                          positionArray={positionThreeArray}
                        />
                      </select>
                      {positionThreeError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {positionThreeError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='row' style={{ marginBottom: '0px' }}>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='playerFour'
                        value={playerFour}
                        className={`browser-default ${
                          playerFourError ? 'invalid-select' : ''
                        }`}
                        onChange={playerChange}
                      >
                        <option value='' disabled>
                          Choose Player 4
                        </option>
                        <PlayerSelectOptions players={players} />
                      </select>
                      {playerFourError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {playerFourError}
                        </span>
                      )}
                    </div>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='positionFour'
                        value={positionFour}
                        className={`browser-default ${
                          positionFourError ? 'invalid-select' : ''
                        }`}
                        onChange={positionChange}
                      >
                        <option value='' disabled>
                          Choose Position
                        </option>
                        <PositionSelectOptions
                          positionArray={positionFourArray}
                        />
                      </select>
                      {positionFourError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {positionFourError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='row'>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='playerFive'
                        value={playerFive}
                        className={`browser-default ${
                          playerFiveError ? 'invalid-select' : ''
                        }`}
                        onChange={playerChange}
                      >
                        <option value='' disabled>
                          Choose Player 5
                        </option>
                        <PlayerSelectOptions players={players} />
                      </select>
                      {playerFiveError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {playerFiveError}
                        </span>
                      )}
                    </div>
                    <div
                      className='input-field col s12 m6'
                      style={{ marginBottom: '0px' }}
                    >
                      <select
                        name='positionFive'
                        value={positionFive}
                        className={`browser-default ${
                          positionFiveError ? 'invalid-select' : ''
                        }`}
                        onChange={positionChange}
                      >
                        <option value='' disabled>
                          Choose Position
                        </option>
                        <PositionSelectOptions
                          positionArray={positionFiveArray}
                        />
                      </select>
                      {positionFiveError.length > 0 && (
                        <span
                          className='error-span helper-text'
                          style={{ marginTop: '2px' }}
                        >
                          {positionFiveError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col s6'>
                      <button
                        className='btn waves-effect waves-light light-blue'
                        type='button'
                        name='action'
                        style={{ marginRight: '10px' }}
                        onClick={resetTeam}
                      >
                        Reset
                        <i className='material-icons right'>refresh</i>
                      </button>
                      <button
                        className='btn waves-effect waves-light teal darken-1'
                        type='submit'
                        name='action'
                        onClick={submitTeam}
                      >
                        Submit
                        <i className='material-icons right'>send</i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstQuater;
