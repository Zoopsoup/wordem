import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { seconds = 0, setSeconds } = props;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
        alert("Loser!");
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return <div>{<h1> {seconds < 10 ? `0${seconds}` : seconds}</h1>}</div>;
};

export default Timer;
