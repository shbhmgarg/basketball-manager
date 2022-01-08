import { useReducer } from 'react';
import playerReducer from './playerReducer';
import {
  ADD_PLAYER,
  GET_PLAYERS,
  GET_TEAM,
  MODAL_MOUNT_FALSE,
  MODAL_MOUNT_TRUE,
  SAVE_TEAM
} from '../types';
import PlayerContext from './playerContext';

const PlayerState = (props) => {
  const initialState = {
    players: [],
    modalMount: false,
    teamSheet: null
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Get Players
  const getPlayers = () => {
    dispatch({ type: GET_PLAYERS });
  };

  const addPlayer = (player) => {
    dispatch({ type: ADD_PLAYER, payload: player });
  };

  const modalMounting = (check) => {
    if (check) dispatch({ type: MODAL_MOUNT_TRUE });
    if (!check) dispatch({ type: MODAL_MOUNT_FALSE });
  };

  const saveTeam = (team) => {
    if (team == null) {
      dispatch({ type: SAVE_TEAM, payload: null });
    } else {
      const selectedTeam = team.map((t) => {
        const player = state.players.filter((p) => {
          return p.id === t.playerId;
        })[0];
        const playerName = player.firstName + ' ' + player.lastName;
        return { ...t, playerName };
      });
      dispatch({ type: SAVE_TEAM, payload: selectedTeam });
    }
  };

  const getTeam = () => {
    dispatch({ type: GET_TEAM });
  };

  return (
    <PlayerContext.Provider
      value={{
        players: state.players,
        modalMount: state.modalMount,
        teamSheet: state.teamSheet,
        saveTeam,
        modalMounting,
        addPlayer,
        getPlayers,
        getTeam
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
