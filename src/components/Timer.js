import { useEffect } from "react";

function Timer({ remainingSeconds, dispatch }) {
  const min = Math.floor(remainingSeconds / 60);
  const sec = remainingSeconds % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch, remainingSeconds]
  );

  return (
    <div className="timer">
      {min.toString().padStart(2, "0")} : {sec.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
