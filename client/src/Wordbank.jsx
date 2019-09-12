import React from 'react';
import './wordbank.css';


function Wordbank(props) {
  return (
    <>
      <div className="wordbank-container">
        <div className="word-div">
          <button>Tired</button>
          <button>Anxious</button>
          <button>Excited</button>
          <button>Bored</button>
          <button>Hungry</button>
          <button>Embarrassed</button>
          <button>Curious</button>
          <button>Confused</button>
          <button>Angry</button>
          <button>Frustrated</button>
          <button>Determined</button>
          <button>Hopeful</button>
          <button>Depressed</button>
          <button>Confident</button>
          <button>Insecure</button>
          <button>Apathetic</button>
          <button>Proud</button>
          <button>Worried</button>
        </div>
        <h1>Optional: Is there anything else you would like your teacher to know today?</h1>
        <textarea value={props.comment} name="comment" onChange={props.onChange}></textarea>
        <button onClick={props.onSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Wordbank;