import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

// functional but incomplete mobile version
const ScoreUpdater = ({ updateScore, players }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(new Array(players.length).fill(null));
  }, [players.length]);

  const updateValues = (newValue, index) => {
    let oldValues = values;
    oldValues[index] = newValue;
    setValues(oldValues);
  };

  // not sure yet how to clear input fields
  // possible bad solution: creating a variable number of refs???
  const handleUpdate = () => {
    updateScore(values);
    const newArr = new Array(players.length).fill(null);
    setValues(newArr);
  };

  const renderPlayerScores = ({ item, index }) => {
    return (
      <View>
        <Text>Score for {item}:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={values[index]}
          onChangeText={(value) => updateValues(value, index)}
        />
      </View>
    );
  };

  return (
    <View style={styles.containerRow}>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={renderPlayerScores}
      />
      <TouchableOpacity style={styles.buttonWrapper} onPress={handleUpdate}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Update Scores</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
    width: 210,
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
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ScoreUpdater;

ScoreUpdater.propTypes = {
  updateScore: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
};
