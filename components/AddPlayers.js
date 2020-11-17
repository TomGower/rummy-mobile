import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// browser version
const AddPlayers = ({ submitFunc }, ref) => (
  <form onSubmit={submitFunc} ref={ref} className="add-players">
    <label htmlFor="playerName">
      Player name:
      <input type="text" id="playerName" name="playerName" />
    </label>
    <br />
    <input type="submit" value="Add Player" />
  </form>
);

export default forwardRef(AddPlayers);

AddPlayers.propTypes = {
  submitFunc: PropTypes.func.isRequired,
};
