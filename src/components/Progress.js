function Progress({ numQuestions, index, points, sumOfPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {sumOfPoints}
      </p>
    </header>
  );
}

export default Progress;
