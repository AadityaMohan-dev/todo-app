import React, {useCallback, useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0); // Time in milliseconds
    const timerRef = useRef(null);
    
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 100); // Increment time by 100ms
            }, 100);
        } else {
            clearInterval(timerRef.current);
        }
        // Cleanup interval on component unmount
        return () => clearInterval(timerRef.current);
    }, [isRunning]);
    
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 100);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2,'0')}`;
    };

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };
    
    
  return (
    <>
    <div id="main-container-stop-watch" className=' rounded-lg px-5 pt-3 backdrop-blur-sm md:backdrop-blur-lg'>
        
        <div id="head" className=' text-lg font-medium'>
            <span className='uppercase'>Stop Watch</span>
        </div>
        <div className="text-4xl mb-4 p-10 grid justify-center">{formatTime(time)}</div>
            <div className='flex justify-center'>
                <button
                    onClick={handleStart}
                    className="px-4 py-2 bg-green-500 text-white rounded mr-2"
                    disabled={isRunning}
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
                    disabled={!isRunning}
                >
                    Stop
                </button>
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Reset
                </button>
            </div>
    </div>
    </>
  )
}

export default StopWatch