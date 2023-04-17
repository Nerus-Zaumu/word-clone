export default function Banner({guessCount, type, answer, guesses, guess}){
    return (
        <>{
            type === 'win' && 
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong>{guessCount}</strong>.
                </p>
            </div>
        }
        {
            type === 'lose' &&
            <div className="sad banner">
                 <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
        }
        </>
    )
}