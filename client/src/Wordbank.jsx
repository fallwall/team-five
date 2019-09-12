import React from 'react';
import './wordbank.css';

function Wordbank(props) {
  return (
    <>
      <button>Tired</button>
      <button>Anxious</button>
      <button>Excited</button>
      <button>Bored</button>
      <button>Hungry</button>
      <h1>Optional: Is there anything else you would like your teacher to know today?</h1>
      <textarea value={props.comment} name="comment" onChange={props.onChange}></textarea>
      <button onClick={props.nextButton}>Submit</button>
    </>
  )
}

export default Wordbank;