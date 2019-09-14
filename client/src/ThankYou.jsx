import React from 'react';

export default function ThankYou(props) {
  return (
    <div className="login-div">
      <p className="thankyou-text">Thanks for submitting your ThoughtBubble today!</p>
      <button className="logout" onClick={props.nextButton}>Log Out?</button>
    </div>
  )
}
