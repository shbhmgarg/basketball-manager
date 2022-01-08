import React, { useEffect, useState, useRef, useContext } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Multiselect from 'multiselect-react-dropdown';
import PlayerContext from '../../context/player/playerContext';

const AddTeamPlayer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [height, setHeight] = useState('');
  const [position, setPosition] = useState([]);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [positionError, setPositionError] = useState('');
  const [mounted, setMounted] = useState(false);
  const [positionOptions] = useState([
    { Position: 'Point Guard (PG)' },
    { Position: 'Shooting Guard (SG)' },
    { Position: 'Small Forward (SF)' },
    { Position: 'Power Forward (PF)' },
    { Position: 'Center (C)' }
  ]);
  const playerContext = useContext(PlayerContext);
  const { addPlayer, modalMount, modalMounting } = playerContext;

  useEffect(() => {
    if (!modalMount) modalMounting(true);
    if (!mounted) return setMounted(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (modalMount) validateFirstName();
    // eslint-disable-next-line
  }, [firstName]);

  useEffect(() => {
    if (modalMount) validateLastName();
    // eslint-disable-next-line
  }, [lastName]);

  useEffect(() => {
    if (modalMount) validateHeight();
    // eslint-disable-next-line
  }, [height]);

  const onSubmit = (e) => {
    e.preventDefault();
    validateFirstName();
    validateLastName();
    validateHeight();
    if (position.length === 0) {
      setPositionError('Please select atleast one position');
      M.toast({ html: 'Please select atleast one position' });
      if (firstNameError !== '' && lastNameError !== '' && heightError !== '') {
        M.toast({
          html: 'Please enter Valid details'
        });
        return false;
      }
      return false;
    } else {
      setPositionError('');
    }

    if (firstNameError !== '' && lastNameError !== '' && heightError !== '') {
      M.toast({ html: 'Please enter valid details' });
      return false;
    }

    const player = {
      firstName: firstName,
      lastName: lastName,
      height: height,
      position: position
    };

    addPlayer(player);

    setFirstNameError('');
    setFirstName('');
    setLastNameError('');
    setLastName('');
    setHeight('');
    setHeightError('');
    setPositionError('');
    setPosition([]);
    multiselectRef.current.resetSelectedValues();
    setMounted(false);
    modalMounting(false);
    M.toast({ html: 'Player added successfully' });
  };

  const closeModal = (e) => {
    e.preventDefault();
    setFirstNameError('');
    setFirstName('');
    setLastNameError('');
    setLastName('');
    setHeight('');
    setHeightError('');
    setPositionError('');
    setPosition([]);
    multiselectRef.current.resetSelectedValues();
    setMounted(false);
    modalMounting(false);
  };

  const multiselectRef = useRef();

  const handleChange = (e) => {
    if (e.target.name === 'firstName') {
      setFirstName(e.target.value);
    } else if (e.target.name === 'lastName') {
      setLastName(e.target.value);
    } else if (e.target.name === 'height') {
      setHeight(e.target.value);
    }
  };

  const positionSelection = (selectedList, selectedItem) => {
    setPosition([...position, selectedItem.Position]);
  };

  const positionRemoval = (selectedList, removedItem) => {
    const val = position.filter((p) => p !== removedItem.Position);
    setPosition(val);
  };
  const validateFirstName = () => {
    if (firstName === '') {
      setFirstNameError('First Name is Required');
    } else if (!firstName.match('^[a-zA-Z]+$')) {
      setFirstNameError('First Name can only contain alphabets');
    } else {
      setFirstNameError('');
    }
  };

  const validateLastName = () => {
    if (lastName === '') {
      setLastNameError('Last Name is Required');
    } else if (!lastName.match('^[a-zA-Z]+$')) {
      setLastNameError('Last Name can only contain alphabets');
    } else {
      setLastNameError('');
    }
  };

  const validateHeight = () => {
    if (height === '') {
      setHeightError('Height is Required');
    } else if (height < 1) {
      setHeightError('Height must be positive');
    } else {
      setHeightError('');
    }
  };

  return (
    <div
      id='add-person-modal'
      className='modal bottom-sheet modal-fixed-footer'
      style={{ maxHeight: '75%' }}
    >
      <div className='modal-content'>
        <h4>Add Team Player</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={handleChange}
              id='firstName'
              className={
                modalMount && firstNameError !== '' ? 'invalid' : 'validate'
              }
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
            <span className='helper-text' data-error={firstNameError}></span>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={handleChange}
              id='lastName'
              className={
                modalMount && lastNameError !== '' ? 'invalid' : 'validate'
              }
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
            <span className='helper-text' data-error={lastNameError}></span>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              name='height'
              value={height}
              id='height'
              onChange={handleChange}
              className={
                modalMount && heightError !== '' ? 'invalid' : 'validate'
              }
            />
            <label htmlFor='height' className='active'>
              Height (in cms)
            </label>
            <span className='helper-text' data-error={heightError}></span>
          </div>
        </div>
        <div className='row'>
          <div
            className={`input-field ${
              modalMount && positionError !== '' ? 'multiselect-error' : ''
            }`}
          >
            <Multiselect
              options={positionOptions}
              displayValue='Position'
              closeIcon='cancel'
              onSelect={positionSelection}
              onRemove={positionRemoval}
              ref={multiselectRef}
              placeholder='Select Position(s)'
            />
            <span
              style={{ color: '#F44336', marginLeft: '5px', fontSize: '12px' }}
            >
              {positionError}
            </span>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={closeModal}
          className='modal-close waves-effect red btn'
          style={{ marginRight: '10px' }}
        >
          Close
        </a>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Add Player
        </a>
      </div>
    </div>
  );
};

export default AddTeamPlayer;
