
import './App.css'
import Description from './components/Description/Description'
import  Feedback  from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'
import { useState } from 'react'
function App() {
  const [feedback,setFeedback]=useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, [feedbackType]:feedback[feedbackType]+1})
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback}/>
      {totalFeedback===0 &&<Notification/>}
      {totalFeedback>0 && <Feedback
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
    totalFeedback = {totalFeedback}
      
      />}  
      
    </>
  )
}

export default App
