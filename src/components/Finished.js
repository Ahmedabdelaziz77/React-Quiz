function Finished({ points, sumOfPoints, highScore, dispatch }) {
  const percentage = (points / sumOfPoints) * 100;
  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {sumOfPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore) : {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
