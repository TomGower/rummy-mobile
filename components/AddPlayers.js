import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// browser version
// const AddPlayers = ({ submitFunc }, ref) => (
//   <form onSubmit={submitFunc} ref={ref} className="add-players">
//     <label htmlFor="playerName">
//       Player name:
//       <input type="text" id="playerName" name="playerName" />
//     </label>
//     <br />
//     <input type="submit" value="Add Player" />
//   </form>
// );

const AddPlayers = ({ submitFunc }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    submitFunc(value);
    setValue('');
  };

  return (
    <>
      <Text>Player name:</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <TouchableOpacity style={styles.buttonWrapper} onPress={handleSubmit}>
        <View>
          <Text>Add Player</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
  },
  buttonWrapper: {
    height: 100,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPlayers;

AddPlayers.propTypes = {
  submitFunc: PropTypes.func.isRequired,
};
