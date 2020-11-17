import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DisplayScores from './DisplayScores';

// browser version, needs at least mobile styling
const ShowPlayer = ({ playerName, scores }) => {
  const [totalScore, setTotalScore] = useState(0);
  const stringifiedScores = JSON.stringify(scores);

  useEffect(() => {
    setTotalScore(scores.reduce((acc, curr) => acc + curr));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifiedScores]);

  return (
    <div>
      <h1 className="playerHeader">{`${playerName}: ${totalScore}`}</h1>
      <DisplayScores scores={scores} total={totalScore} />
    </div>
  );
};

export default ShowPlayer;

ShowPlayer.propTypes = {
  playerName: PropTypes.string.isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};
