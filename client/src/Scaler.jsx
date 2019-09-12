import React, { useState } from 'react';
import { Slider } from "react-semantic-ui-range";
// import "semantic-ui-css/semantic.min.css";
import { Label, Grid, Input } from "semantic-ui-react";
import './scaler.css';

const Scaler = (props) => {
  const [value, setValue] = useState(5);

  const settings = {
    start: 0,
    min: 0,
    max: 10,
    step: 1,
    onChange: value => {
      setValue(value);
    }
  };

  const handleValueChange = e => {
    let value = parseInt(e.target.value);
    if (!value) {
      value = 0;
    }
    setValue(e.target.value);
  };

  return (
    <div className="scaler">
      <Grid>
        <Grid.Column width={16}>
          <Slider value={value} color="blue" settings={settings} />
        </Grid.Column>
        <Grid.Column width={16}>
          <Input placeholder="Enter Value" onChange={handleValueChange} />
          <Label color="blue">{value}</Label>
        </Grid.Column>
      </Grid>
      <button>Next</button>
    </div>
  );
};



export default Scaler;