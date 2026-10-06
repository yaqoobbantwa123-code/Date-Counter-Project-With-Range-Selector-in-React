import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date();

  date.setDate(date.getDate() + count);

  function handlePrevious() {
    setCount((count) => count - step);
  }

  function handleNext() {
    setCount((count) => count + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className='app'>

      <div className='step-container'>
        <input type="range" min= "1" max = "15" value={step} onChange={(e) => setStep(Number(e.target.value))}  />

        <span>{step}</span>
      </div>

      <div className='counter'>
        <button onClick={handlePrevious}>-</button>

        <span>{count}</span>

        <button onClick={handleNext}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : `${Math.abs(count)} days ${
            count > 0 ? "from" : "ago"
          } today is `}

          {date.toDateString()}
      </p>

      <button className='reset' onClick={handleReset}>Reset</button>
      
    </div>
    
  );
}

export default App
