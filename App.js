import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import AddPlayers from './components/AddPlayers';
import GameReset from './components/GameReset';
import ScoreUpdater from './components/ScoreUpdater';
import ShowPlayer from './components/ShowPlayer';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [playerScores, setPlayerScores] = useState([]);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [update, setUpdate] = useState(false);
  const [rounds, setRounds] = useState(0);

  // seems to work for mobile
  const resetGame = () => {
    setPlayers([]);
    setPlayerScores([]);
    setRoundsPlayed(0);
  };

  // seems to work for mobile
  const addPlayer = (newPlayer) => {
    if (!newPlayer) {
      return;
    }
    if (players.indexOf(newPlayer) !== -1) {
      // eslint-disable-next-line no-alert
      alert('All players must have a unique name');
      return;
    }
    setPlayers([...players, newPlayer]);
    setPlayerScores([
      ...playerScores,
      { name: newPlayer, scores: [0], totalScore: 0 },
    ]);
  };

  // seems to work for mobile
  const updateScore = (newScores) => {
    let oldScores = playerScores;
    for (let i = 0; i < playerScores.length; i++) {
      if (newScores[i]) {
        const curr = +newScores[i];
        if (oldScores[i].scores.length === 1 && oldScores[i].scores[0] === 0) {
          oldScores[i].scores = [curr];
        } else {
          oldScores[i].scores.push(curr);
        }
        oldScores[i].totalScore += curr;
      }
    }
    setPlayerScores(oldScores);
    setRoundsPlayed(roundsPlayed + 1);
    setRounds(rounds + 1);
    setUpdate(!update);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <GameReset resetFunc={resetGame} />
        <AddPlayers submitFunc={addPlayer} />
        <Text>You have played {roundsPlayed} rounds.</Text>
        {players.length > 0 ? (
          <>
            <Text>Displaying Players</Text>
            <ScoreUpdater
              updateScore={updateScore}
              players={players}
              updateComponent={update}
            />
            <FlatList
              data={playerScores}
              keyExtractor={(item) => item.name}
              renderItem={ShowPlayer}
              extraData={rounds}
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
    width: '100%',
    minWidth: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
