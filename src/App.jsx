import { useEffect, useState } from "react";
import "./App.css";
import StopWatch from "./component/stopwatch/StopWatch";
import TodoApp from "./component/todoapp/TodoApp";
import WeatherApp from "./component/weather-app/Quotes";
import Quotes from "./component/weather-app/Quotes";

function App() {
  const[date, setDate] = useState(new Date())
    const[time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
        setDate(new Date());
        setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
}, [])
const formatDate = (date) => {
    return date.toLocaleString('en-US', {
        weekday: 'long', // e.g., "Monday"
        year: 'numeric', // e.g., "2024"
        month: 'long', // e.g., "September"
        day: 'numeric', // e.g., "4"
    });
};

const formatTime = (time) => {
    return time.toLocaleString('en-US',{
        hour: '2-digit', // e.g., "09 AM"
        minute: '2-digit', // e.g., "00"
        second: '2-digit', // e.g., "00"
    });
  }
  return (
    <>
    
      <div
        id="main-app-container"
        className="h-screen w-screen  bg-[url('https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149018550.jpg?t=st=1725475997~exp=1725479597~hmac=9ca3a0f3e9fb2b61fb9e9a5d796f6d7bd18017e58ccdabefc454e9d01acaaed1&w=740')] bg-cover bg-center"
      >
        <div id="time-date" className='flex justify-between px-10 py-5'>
            <div id="date" className='  text-lg'>{formatDate(date)}</div>
            <div id="time" className='  text-lg'>{formatTime(time)}</div>
        </div>
        <div id="row-2" className="flex justify-between flex-wrap md:flex-nowrap py-10">
        <div id="co1-1"  className="grid gap-2 justify-around px-10">
          <div id="row-1" className="border h-60 w-96 rounded-lg  backdrop-blur-xl md:backdrop-blur-lg">
            <Quotes/>
          </div>
          <div id="row-2" className="border h-60 w-96 rounded-lg backdrop-blur-xl md:backdrop-blur-lg bg-transparent">
            <StopWatch/>
          </div>
        </div>
        <div id="col-2" className="h-full w-full pr-10">
          <div id="todo-app" className="border rounded-lg h-full ">
          <TodoApp/>
          </div>
          
        </div>
        </div>
        
        

      </div>
    </>
  );
}

export default App;
