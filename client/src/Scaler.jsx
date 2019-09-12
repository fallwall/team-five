import React, { useState } from 'react';
import { Slider } from "react-semantic-ui-range";
import { Label, Grid, Input } from "semantic-ui-react";
import './scaler.css';

const Scaler = (props) => {
  const [value, setValue] = useState(3);

  const settings = {
    start: 0,
    min: 0,
    max: 4,
    step: 1,
    onChange: value => {
      setValue(value);
    }
  };

  const handleValueChange = (e) => {
    let value = parseInt(e.target.value);
    if (!value) {
      value = 0;
    }
    setValue(e.target.value);
    props.handleChange(parseInt(e.target.value));
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

  return (
    <div className="scaler">
      <p>How are you feeling today?</p>
      <Grid>
        <Grid.Column width={16}>
          <Slider value={value} color="black" settings={settings} />
        </Grid.Column>
        <Grid.Column width={16}>
          <Input placeholder="Enter Value" onChange={handleValueChange} />
          <Label color="red">{value + 1}</Label>
          <Label color="blue">{translator(value)}</Label>
        </Grid.Column>
      </Grid>
      <button name="feeling_scale" value={props.value} onChange={props.onChange} onClick={props.nextButton}>Next</button>
    </div>
  );
};



export default Scaler;