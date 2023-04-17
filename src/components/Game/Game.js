import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../Guess/guess';
import GuessHistory from '../GuessHistory/guess-history';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  return (
  <>
    <GuessHistory guesses={guesses}/>
    <GuessInput setGuess={setGuess} guess={guess} setGuesses={setGuesses} answer={answer} guesses={guesses}/>
  </>
  )
}

export default Game;
