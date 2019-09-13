import React from 'react';
import './wordbank.css';

function Wordbank(props) {

  return (
    <>
      <div className="wordbank-container" >
        <div className="word-div">
          <button name="tired" onClick={props.setFeelings}>Tired</button>
          <button name="anxious" onClick={props.setFeelings}>Anxious</button>
          <button name="excited" onClick={props.setFeelings}>Excited</button>
          <button name="bored" onClick={props.setFeelings}>Bored</button>
          <button name="hungry" onClick={props.setFeelings}>Hungry</button>
          <button name="embarrassed" onClick={props.setFeelings}>Embarrassed</button>
          <button name="curious" onClick={props.setFeelings}>Curious</button>
          <button name="confused" onClick={props.setFeelings}>Confused</button>
          <button name="angry" onClick={props.setFeelings}>Angry</button>
          <button name="frustrated" onClick={props.setFeelings}>Frustrated</button>
          <button name="determined" onClick={props.setFeelings}>Determined</button>
          <button name="hopeful" onClick={props.setFeelings}>Hopeful</button>
          <button name="depressed" onClick={props.setFeelings}>Depressed</button>
          <button name="confident" onClick={props.setFeelings}>Confident</button>
          <button name="insecure" onClick={props.setFeelings}>Insecure</button>
          <button name="apathetic" onClick={props.setFeelings}>Apathetic</button>
          <button name="proud" onClick={props.setFeelings}>Proud</button>
          <button name="worried" onClick={props.setFeelings}>Worried</button>
        </div>

        <h1>Optional: Is there anything else you would like your teacher to know today?</h1>
        <textarea value={props.comment} name="comment" onChange={props.onChange}></textarea>
        <button onClick={props.onSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Wordbank;