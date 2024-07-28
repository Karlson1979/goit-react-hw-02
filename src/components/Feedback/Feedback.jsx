

export const Feedback = ({good,neutral,bad}) => {
  return (
    <div>
     <p>Good:{good}</p>   
     <p>Neutral:{neutral}</p>   

     <p>Bad:{bad}</p>   

     {/* <p>Total:</p>   

     <p>Positive:</p>    */}

    </div>
  )
}
export default Feedback