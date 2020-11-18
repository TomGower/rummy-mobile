import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import DisplayScores from './DisplayScores';

const ShowPlayer = ({ item }) => {
  const { name, scores, totalScore } = item;

  return (
    <View>
      <Text>
        Hi {name}. Your total score is {totalScore}.
      </Text>
      <DisplayScores scores={scores} total={totalScore} />
    </View>
  );
};

export default ShowPlayer;

ShowPlayer.propTypes = {
  playerName: PropTypes.string.isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};
