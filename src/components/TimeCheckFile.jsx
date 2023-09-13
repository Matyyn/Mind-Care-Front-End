import React, { useState, useRef } from 'react';

function TimeCalculator() {
  const startTimestampRef = useRef(null);
  const endTimestampRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState('');

  const handleStart = () => {
    startTimestampRef.current = Date.now();    
    
    setIsRecording(true);
    setResult('');
  };

  const handleEnd = () => {
    if (startTimestampRef.current) {
      endTimestampRef.current = Date.now();
      setIsRecording(false);
      const timeDiff = endTimestampRef.current - startTimestampRef.current;
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setResult(`Time Difference: ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);
    } else {
      setResult('Please click "Start" first.');
    }
  };

  return (
    <div>
      <h1>Time Calculator</h1>
      <div>
        <button onClick={handleStart} disabled={isRecording}>
          Start
        </button>
        <button onClick={handleEnd} disabled={!isRecording}>
          End
        </button>
      </div>
      <div>{result}</div>
    </div>
  );
}

export default TimeCalculator;
