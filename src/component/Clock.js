import React, { useEffect, useRef, useState } from "react";

const Clock = () => {
  //them cac state thoi gian va bat dau

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  //them state tieng chuong
  const [playingRing, setPlayingRing] = useState(false);
  const ring = useRef(null);

  //cac chuc nang
  useEffect(() => {
    if (running) {
      //chay dong ho
      //dem xuong
      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            //khi ca hai bang 0 thi ngung
            clearInterval(interval);
            setRunning(false); //cho ngung chay
            setPlayingRing(true); //bat am thanh bao
            ring.current.play();
            setTimeout(() => {
              setPlayingRing(false); //tat am thanh
              ring.current.pause(); // Tắt âm thanh chuông
              ring.current.currentTime = 0; // Đặt lại thời gian âm thanh chuông về 0
            }, 5000);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [running, minutes, seconds]);

  const startTimer = () => {
    //time chay khi co thoi gian
    if (minutes > 0 || seconds >= 1) {
      setRunning(true);
    } else {
      setMinutes(0);
      setSeconds(0);
      setRunning(false);
    }
  };
  //
  const stopTimer = () => {
    setRunning(false);
  };
  //
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setRunning(false);
    setPlayingRing(false);
  };
  const handleMinutes = event => {
    const newMinutes = parseInt(event.target.value, 10);
    setMinutes(newMinutes);
  };
  const handleSecond = event => {
    const newSecond = parseInt(event.target.value, 10);
    setSeconds(newSecond);
  };
  let con = "ba";
  console.log(con);
  //
  return (
    <div className="flex justify-center">
      <div className="rounded-lg w-1/2 h-1/2 mt-10 p-3 mt-4 bg-cyan-100">
        <div className="uppercase font-bold decoration-slate-800 ">
          Timer pomodoro
        </div>
        <div>
          <input
            className="p-2 bg-cyan-200 rounded"
            type="number"
            placeholder="minutes"
            value={minutes}
            onChange={handleMinutes}
            min="0"
          />
          minutes
          <span> :</span>
          <input
            className="p-2 ml-2 bg-cyan-200 rounded"
            type="number"
            placeholder="second"     
            value={seconds}
            onChange={handleSecond}
            min="0"
            max="59"
          />
          second
          <div className="flex justify-center ">
            <button
              className="bg-yellow-400 p-1 m-3 rounded"
              onClick={startTimer}
            >
              start
            </button>
            <button
              className="bg-yellow-400 p-1 m-3 rounded"
              onClick={stopTimer}
            >
              stop
            </button>
            <button
              className="bg-yellow-400 p-1 m-3 rounded"
              onClick={resetTimer}
            >
              reset
            </button>
          </div>
        </div>
        <div>
          <span>
            Time remaining :{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
            {playingRing && <p>Time Over...</p>}
          </span>
          <audio
            ref={ring}
            src="/alarm-clock-short-6402.mp3"
            autoPlay={playingRing}
          />
        </div>
      </div>
    </div>
  );
};

export default Clock;
