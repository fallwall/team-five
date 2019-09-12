import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <button onClick={props.nextButton}>LOGIN</button>
      </form>
    </div>
  )
}
