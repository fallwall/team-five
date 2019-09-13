import React from 'react';
import { Slider } from "react-semantic-ui-range";
import { Label, Grid } from "semantic-ui-react";
import './scaler.css';

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

  return (
    <div className="scaler">
      <h1>How are you feeling today?</h1>
      <Grid>
        <Grid.Column width={16}>
          <Slider value={props.feeling_scale} color="black" settings={settings} />
        </Grid.Column>
        <Grid.Column width={16}>

          <Label color="red">{props.feeling_scale + 1}</Label>

          <Label color="blue">{translator(props.feeling_scale)}</Label>
        </Grid.Column>
      </Grid>

    </div>
  );
};



export default Scaler;