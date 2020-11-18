import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const AddPlayers = ({ submitFunc }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    submitFunc(value);
    setValue('');
  };

  return (
    <>
      <Text>New Player Name:</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <TouchableOpacity style={styles.buttonWrapper} onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Player</Text>
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
    height: 50,
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
