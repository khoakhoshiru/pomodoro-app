import React, { useState, useEffect, useRef } from "react";

function Clock2() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isRingPlaying, setIsRingPlaying] = useState(false);

  const ringSound = useRef(null);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
            setIsRingPlaying(true);
            ringSound.current.play();
            setTimeout(() => {
              setIsRingPlaying(false);
              ringSound.current.pause();
              ringSound.current.currentTime = 0;
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

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    setIsRingPlaying(false);
  };

  const handleMinutesChange = event => {
    const newMinutes = parseInt(event.target.value, 10);
    setMinutes(newMinutes);
  };

  const handleSecondsChange = event => {
    const newSeconds = parseInt(event.target.value, 10);
    setSeconds(newSeconds);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold my-4">Đồng hồ đếm ngược</h1>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Phút"
          value={minutes}
          onChange={handleMinutesChange}
          min="0"
          className="p-2 border rounded"
        />
        <span className="mx-2">:</span>
        <input
          type="number"
          placeholder="Giây"
          value={seconds}
          onChange={handleSecondsChange}
          min="0"
          max="59"
          className="p-2 border rounded"
        />
      </div>
      <div>
        <button
          onClick={startTimer}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Bắt đầu
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Dừng
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          Đặt lại
        </button>
      </div>
      <div className="mt-4">
        <p className="text-2xl">
          Thời gian còn lại: {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
        {isRingPlaying && <p className="text-red-600 mt-2">Hết Giờ...</p>}
      </div>
      <audio ref={ringSound} src="telephone-ring-03a.mp3" loop />
    </div>
  );
}

export default Clock2;
