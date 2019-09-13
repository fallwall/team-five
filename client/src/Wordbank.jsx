import React from 'react';
import './wordbank.css';

function Wordbank(props) {
  const isChecked = (stuff) => {
    return props.feelings.indexOf(stuff) !== -1;
   }
  return (
    <>
      <div className="wordbank-container" >
        <div className="word-div">
          <button className={isChecked("tired")? "button-checked": "button-unchecked"} name="tired" onClick={props.setFeelings}>Tired</button>
          <button className={isChecked("anxious")? "button-checked": "button-unchecked"} name="anxious" onClick={props.setFeelings}>Anxious</button>
          <button className={isChecked("excited")? "button-checked": "button-unchecked"} name="excited" onClick={props.setFeelings}>Excited</button>
          <button className={isChecked("bored")? "button-checked": "button-unchecked"} name="bored" onClick={props.setFeelings}>Bored</button>
          <button className={isChecked("hungry")? "button-checked": "button-unchecked"} name="hungry" onClick={props.setFeelings}>Hungry</button>
          <button className={isChecked("embarrassed")? "button-checked": "button-unchecked"} name="embarrassed" onClick={props.setFeelings}>Embarrassed</button>
          <button className={isChecked("curious")? "button-checked": "button-unchecked"} name="curious" onClick={props.setFeelings}>Curious</button>
          <button className={isChecked("confused")? "button-checked": "button-unchecked"} name="confused" onClick={props.setFeelings}>Confused</button>
          <button className={isChecked("angry")? "button-checked": "button-unchecked"} name="angry" onClick={props.setFeelings}>Angry</button>
          <button className={isChecked("frustrated")? "button-checked": "button-unchecked"} name="frustrated" onClick={props.setFeelings}>Frustrated</button>
          <button className={isChecked("determined")? "button-checked": "button-unchecked"} name="determined" onClick={props.setFeelings}>Determined</button>
          <button className={isChecked("hopeful")? "button-checked": "button-unchecked"} name="hopeful" onClick={props.setFeelings}>Hopeful</button>
          <button className={isChecked("depressed")? "button-checked": "button-unchecked"} name="depressed" onClick={props.setFeelings}>Depressed</button>
          <button className={isChecked("confident")? "button-checked": "button-unchecked"} name="confident" onClick={props.setFeelings}>Confident</button>
          <button className={isChecked("insecure")? "button-checked": "button-unchecked"} name="insecure" onClick={props.setFeelings}>Insecure</button>
          <button className={isChecked("apathetic")? "button-checked": "button-unchecked"} name="apathetic" onClick={props.setFeelings}>Apathetic</button>
          <button className={isChecked("proud")? "button-checked": "button-unchecked"} name="proud" onClick={props.setFeelings}>Proud</button>
          <button className={isChecked("worried")? "button-checked": "button-unchecked"} name="worried" onClick={props.setFeelings}>Worried</button>
        </div>
        <textarea placeholder="Do you have anything you'd like to share with your teacher? (Optional)" value={props.comment} name="comment" onChange={props.onChange}></textarea>
        <button onClick={props.onSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Wordbank;