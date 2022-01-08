import {
  ADD_PLAYER,
  GET_PLAYERS,
  MODAL_MOUNT_FALSE,
  MODAL_MOUNT_TRUE,
  SAVE_TEAM,
  GET_TEAM
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      const ids = state.players.map((player) => player.id);
      let id = 0;
      if (ids.length === 0) id = 1;
      else {
        let max = Math.max.apply(null, ids);
        id = max + 1;
      }
      action.payload.id = id;
      const players = [...state.players, action.payload];
      localStorage.setItem('players', JSON.stringify(players));
      return {
        ...state,
        players: [...state.players, action.payload],
        modalMount: false
      };
    case GET_PLAYERS:
      let playersStorage = localStorage.getItem('players');
      playersStorage = JSON.parse(playersStorage);
      return {
        ...state,
        players: playersStorage
      };
    case MODAL_MOUNT_TRUE:
      return {
        ...state,
        modalMount: true
      };
    case MODAL_MOUNT_FALSE:
      return {
        ...state,
        modalMount: false
      };
    case SAVE_TEAM:
      localStorage.setItem('team', JSON.stringify(action.payload));
      return {
        ...state,
        teamSheet: action.payload
      };
    case GET_TEAM:
      let playerStorage = localStorage.getItem('players');
      playerStorage = JSON.parse(playerStorage);
      if (playerStorage !== null || playerStorage !== undefined) {
        let team = localStorage.getItem('team');
        team = JSON.parse(team);
        return {
          ...state,
          players: playerStorage,
          teamSheet: team
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
