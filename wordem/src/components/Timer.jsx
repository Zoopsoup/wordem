import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { seconds = 0, setSeconds, setUsedLetters } = props;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
        alert("Loser!");
        setUsedLetters([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return <div>{<h1> {seconds < 10 ? `0${seconds}` : seconds}</h1>}</div>;
};

export default Timer;
