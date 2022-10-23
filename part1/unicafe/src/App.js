

import { useState } from 'react'
import { Average } from './components/Average'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      
      <button onClick={()=>setGood(good+1)} >good</button>
      <button onClick={()=>setNeutral(neutral+1)} >neutral</button>
      <button onClick={()=>setBad(bad+1)} >bad</button>
      
      <h2>stats</h2>
      {(good===0 && bad===0 && neutral===0)?<h2>no feedback provided</h2>: <><p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Average good={good} neutral={neutral} bad={bad} /> </>
      }
     
    </div>
  )
}

export default App