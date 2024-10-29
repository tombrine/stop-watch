"use client";
import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const add = () => {
    setTimer((prev) => prev + 15);
  };

  const addTime = () => {
    setTimer((prev) => (prev >= 0 ? prev + 1 : 0));
  };

  const sec = timer % 60;
  const minut = Math.floor(timer / 60);
  console.log(sec, minut);

  const formatTime = (time) => {
    if (time <= 9) {
      return `0${time}`;
    }
    return time;
  };

  useEffect(() => {
    const myInterval = setInterval(addTime, 1000);
    return () => clearInterval(myInterval);
  }, []);

  const minuse = () => {
    if (timer < 15) {
      return;
    } else {
      setTimer((prev) => prev - 15);
    }
    // setTimer((prev) => (prev < 15 ? prev - 15 : prev));
  };

  return (
    <div className="page">
      <div className="body">
        <div className="watch">
          <p>{formatTime(minut)}</p> <p>:</p> <p>{formatTime(sec)}</p>
        </div>
        <div className="btns">
          <button className="add_btn" onClick={add}>
            add +15
          </button>
          <button className="minuse_btn" onClick={minuse}>
            minuse -15
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
