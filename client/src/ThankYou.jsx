import React from 'react';

export default function ThankYou(props) {
  return (
    <div>
      <p>Thank you filling out the survey!</p>
      <button onClick={props.nextButton}>LOG OUT</button>
    </div>
  )
}
