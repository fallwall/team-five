import React from 'react';
import { Slider } from "react-semantic-ui-range";
import { Label, Grid } from "semantic-ui-react";
import './scaler.css';
import Image from './Slider.png'

const Scaler = (props) => {

  const settings = {
    start: 0,
    min: 0,
    max: 4,
    step: 1,
    onChange: value => {
      props.setScale(value);
    }
  };

  const translator = (val) => {
    switch (val) {
      case 0:
        return "Very Negative";
        break;
      case 1:
        return "Negative";
        break;
      case 2:
        return "Okay";
        break;
      case 3:
        return "Positive";
        break;
      case 4:
        return "Very Positive";
        break;
      default:
        return "";
    }
  }
  const isChecked = (stuff) => {
    return props.feelings.indexOf(stuff) !== -1;
   }

  return (
    <div className="scaler">
      <h1 class="title">How are you feeling today?</h1>
      <img class="landingicons" src={Image} />
      <div className="slider-background">
      <Grid className="slider-bar">
        <Grid.Column width={16}>
          <Slider value={props.feeling_scale} color="black" settings={settings} />
        </Grid.Column>
        <Grid.Column width={16}>

          <Label color="red">{props.feeling_scale + 1}</Label>

          <Label color="blue">{translator(props.feeling_scale)}</Label>
        </Grid.Column>
      </Grid>
      </div>
      <>
      <div className="wordbank-container" >
          <h1 class="feelings">Which words describe how you feel?</h1>
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

        <button className="submit" onClick={props.onSubmit}>Submit</button>

      </div>
    </>
    </div>
  );
};



export default Scaler;