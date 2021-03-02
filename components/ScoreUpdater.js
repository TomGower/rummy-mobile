import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import PropTypes, { bool } from 'prop-types';
// import RenderPlayerScores from './RenderPlayerScores';

// functional but incomplete mobile version
const ScoreUpdater = ({ updateScore, players, updateComponent }) => {
  const [values, setValues] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setValues(new Array(players.length).fill(undefined));
  }, [players.length]);

  const updateValues = (newValue, index) => {
    let newValues = Array.from(values);
    newValues[index] = newValue;
    setValues(newValues);
  };

  // not sure yet how to clear input fields
  // possible bad solution: creating a variable number of refs???
  const handleUpdate = () => {
    updateScore(values);
    // for (let i = 0; i < values.length; i++) {
    //   if (values[i]) {
    //     console.log(myRefs[i]);
    //   }
    // }
    const newArr = new Array(players.length).fill(undefined);
    setValues(newArr);
    setUpdate(!update);
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
        // renderItem={(item, index) => (
        //   <RenderPlayerScores
        //     item={item}
        //     index={index}
        //     defaultValue={values[index]}
        //     updates={update}
        //     changeFunc={updateValues}
        //     // ref={(el) => myRefs.current.push(el)}
        //   />
        // )}
        extraData={update}
        // ref={(el) => (myRefs.current[index] = el)}
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
  updateComponent: bool,
};
