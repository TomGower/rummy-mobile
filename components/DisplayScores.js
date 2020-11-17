import React from 'react';
import PropTypes from 'prop-types';

// browser version, mobile does not support map
const DisplayScores = ({ scores, total }) => {
  let subtotal = 0;
  return (
    <div>
      {scores.map((score, i) => {
        subtotal += score;
        if (i === 0) {
          return (
            <div key={`${score}_${i}`}>
              <span className="displayedScore">{score}</span>
              <br />
            </div>
          );
        }
        if (i < scores.length - 1) {
          return (
            <div key={`${score}_${i}`}>
              <div>
                {'+ '}
                <span className="displayedScore">{score}</span>
              </div>
              <br />
              <hr />
              <div className="displayedScore">{subtotal}</div>
              <br />
            </div>
          );
        }
        return (
          <div key={`${score}_${i}`}>
            <div>
              {'+ '}
              <span className="displayedScore">{score}</span>
            </div>
            <hr />
            <span className="displayedScore">{total}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayScores;

DisplayScores.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
};
