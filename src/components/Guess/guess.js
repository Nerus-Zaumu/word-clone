import { checkGuess } from "../../game-helpers";
import Banner from "../banner/Banner";
import React from "react";

export default function GuessInput({guess, setGuess, setGuesses, answer, guesses}){
    const [type, setType] = React.useState('');
    return (
        <>
            <form className="guess-input-wrapper" onSubmit={(e) => {
                e.preventDefault();
                if(guess.length === 5){
                    const pGuesses = [...guesses, checkGuess(guess, answer)]
                    setGuesses([...pGuesses])
                    setGuess('')
                }
                if(answer === guess){
                    const newType = 'win'
                    setType(newType)
                }
                if(guesses.length === 4 && answer !== guess){
                    const newType = 'lose'
                    setType(newType)
                }
            }}>
                <label htmlFor="guess-input">Enter Guess</label>
                <input type="text" id="guess-input" 
                    minLength={5} 
                    maxLength={5} 
                    required={true} 
                    onChange={(e) => {
                        const uppercaseInput = e.target.value.toUpperCase()
                        e.target.value = uppercaseInput
                        setGuess(uppercaseInput)
                    }}
                    disabled={type === 'win' | 'lose'}
                    value={guess}
                />
                {
                    <Banner type={type} answer={answer} guessCount={guesses.length} guesses={guesses} guess={guess}/>
                }
            </form>
        </>
    )   
}