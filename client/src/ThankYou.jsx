import React from 'react';

export default function ThankYou(props) {
  return (
    <div className="login-div">
      <p className="thankyou-text">Thank you filling out the survey!</p>
      <button className="logout" onClick={props.nextButton}>LOG OUT</button>
    </div>
  )
}
