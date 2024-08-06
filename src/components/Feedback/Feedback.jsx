

export const Feedback = ({good,neutral,bad,totalFeedback}) => {
  return (
    <div>
     <p>Good:{good}</p>   
     <p>Neutral:{neutral}</p>   

     <p>Bad:{bad}</p>   

     <p>Total:{totalFeedback}</p>   

     <p>Positive:</p>   

    </div>
  )
}
export default Feedback