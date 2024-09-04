import React, { useEffect, useState } from 'react'

function Quotes() {

  const [quote, setQuote] = useState('')
  const [index, setIndex] = useState(0)
  const motivationalQuotes = [
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "The only way to achieve the impossible is to believe it is possible. — Charles Kingsleigh",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "The best way to predict your future is to create it. — Peter Drucker",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky"
];
useEffect(() => {
  if(index == motivationalQuotes.length) setIndex(0)
  setQuote(() => motivationalQuotes[index])
}, [index,setIndex])

setTimeout(() => {
  if(index == motivationalQuotes.length) setIndex(0)
  setIndex(index + 1)
}, 60000);

  return (
    <>
    <div id="main-quotes-container" className='p-5 '>
    <div id="head" className=' text-lg font-medium'>
            <span className='uppercase'>Quotes</span>
        </div>
      <div id="card"className=' text-lg rounded p-3 font-semibold mt-6'>{quote}</div>
    </div>
    </>
  )
}

export default Quotes