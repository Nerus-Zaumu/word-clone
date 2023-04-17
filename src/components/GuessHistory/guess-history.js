export default function GuessHistory({guesses}) {
    
    return (
        <>
            <div className="guess-results">
                {
                    Array(5).fill(0).map((val, index) => (
                        <p className="guess" key={Math.random()}>
                            {
                                !Boolean(guesses[index]) && Array(5).fill(0).map(() => (
                                    <span className="cell" key={Math.random()}></span>
                                ))
                            }
                            {

                                Boolean(guesses[index]) && guesses[index].map(res => (
                                    <span value={res.letter} key={Math.random()} className={"cell " + res.status}></span>
                                ))
                            }
                        </p>
                    ))
                }
            </div>
        </>
    )

}