import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const GameReset = ({ resetFunc }) => (
  <TouchableOpacity style={styles.buttonWrapper} onPress={resetFunc}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Reset Game</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 50,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    height: 30,
    backgroundColor: 'grey',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameReset;

GameReset.propTypes = {
  resetFunc: PropTypes.func.isRequired,
};
