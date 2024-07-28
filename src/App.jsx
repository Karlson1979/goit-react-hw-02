
import './App.css'
import Description from './components/Description/Description'
import { Feedback } from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import { useState } from 'react'
function App() {
  const [feedback,setFeedback]=useState({
    good: 0,
        neutral: 0,
        bad: 0,
  })

  return (
    <>
      <Description/>
      <Options/>
      <Feedback
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
      />
    </>
  )
}

export default App
