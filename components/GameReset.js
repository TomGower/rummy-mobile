import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

const GameReset = ({ resetFunc }) => (
  <TouchableOpacity onPress={resetFunc}>
    <View>
      <Text>Reset Game</Text>
    </View>
  </TouchableOpacity>
);

export default GameReset;

GameReset.propTypes = {
  resetFunc: PropTypes.func.isRequired,
};
