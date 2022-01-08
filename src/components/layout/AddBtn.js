import React, { useContext } from 'react';
import PlayerContext from '../../context/player/playerContext';

const AddBtn = () => {
  const playerContext = useContext(PlayerContext);
  const { modalMounting } = playerContext;

  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-person-modal'
        className='btn-floating btn-large red darken-1 modal-trigger'
        onClick={() => {
          modalMounting(true);
        }}
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
