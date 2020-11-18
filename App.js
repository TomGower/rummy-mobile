import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import AddPlayers from './components/AddPlayers';
// import DisplayPlayer from './components/DisplayPlayer';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [playerScores, setPlayerScores] = useState({});
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const scoreRef = useRef();

  // works for mobile
  const DisplayPlayer = ({ item }) => <Text>{item}</Text>;

  // browser version
  const resetGame = () => {
    setPlayers([]);
    setPlayerScores({});
    setRoundsPlayed(0);
  };

  // seems to work for mobile
  const addPlayer = (newPlayer) => {
    if (!newPlayer) {
      return;
    }
    setPlayers([...players, newPlayer]);
    setPlayerScores({ ...playerScores, [newPlayer]: [0] });
  };

  // browser version
  const updateScore = (event) => {
    event.preventDefault();
    let oldScores = playerScores;
    const { target } = event;
    players.forEach((player) => {
      if (target[player].value) {
        let oldPlayerScore = oldScores[player];
        if (oldPlayerScore.length === 1 && oldPlayerScore[0] === 0) {
          oldPlayerScore = [+target[player].value];
        } else {
          oldPlayerScore.push(+target[player].value);
        }
        oldScores = { ...oldScores, [player]: oldPlayerScore };
      }
    });
    setPlayerScores(oldScores);
    setRoundsPlayed(roundsPlayed + 1);
    scoreRef.current.reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={resetGame}>
          <View>
            <Text>Reset Game</Text>
          </View>
        </TouchableOpacity>
        <AddPlayers submitFunc={addPlayer} />
        <Text>{players.length}</Text>
        {players.length > 0 ? (
          <>
            <Text>Displaying Players</Text>
            <FlatList
              data={players}
              keyExtractor={(item, index) => index.toString()}
              renderItem={DisplayPlayer}
            />
          </>
        ) : null}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
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
