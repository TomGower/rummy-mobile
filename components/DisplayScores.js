import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const DisplayScores = ({ scores, total }) => {
  const getSubtotal = (index) => {
    let subtotal = 0;
    for (let i = 0; i <= index; i++) {
      subtotal += scores[i];
    }
    return subtotal;
  };

  const renderFunc = ({ index, item }) => {
    if (index === 0) {
      return (
        <View>
          <Text style={styles.alignRight}>{item}</Text>
        </View>
      );
    }
    if (index < scores.length - 1) {
      return (
        <View>
          <View style={styles.containerRow}>
            <Text>+ </Text>
            <Text>{item}</Text>
          </View>
          <View style={styles.lineStyle} />
          <Text style={styles.alignRight}>{getSubtotal(index)}</Text>
        </View>
      );
    }
    return (
      <View>
        <View style={styles.containerRow}>
          <Text>+ </Text>
          <Text>{item}</Text>
        </View>
        <View style={styles.lineStyle} />
        <Text style={styles.alignRight}>{total}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={scores}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderFunc}
    />
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  alignRight: {
    textAlign: 'right',
    marginRight: 20,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
  },
});

export default DisplayScores;

DisplayScores.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
};
