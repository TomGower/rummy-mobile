import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const RenderPlayerScores = ({
  item,
  index,
  defaultValue,
  changeFunc,
  updates,
}) => {
  const [newValue, setNewValue] = useState(undefined);

  useEffect(() => {
    setNewValue(defaultValue);
  }, [defaultValue]);

  const onChange = (value) => {
    setNewValue(value);
    changeFunc(value, index);
    setNewValue(undefined);
  };

  return (
    <View>
      <Text>Score for {item.item}:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={newValue}
        onChangeText={onChange}
        name={item.item}
      />
    </View>
  );
};

export default RenderPlayerScores;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
    width: 210,
  },
});
