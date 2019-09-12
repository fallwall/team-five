import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div class="login-div">
      <form>
        <label class="name-label" htmlFor="username">Name</label>
        <input class="name-input" name="username" value={props.username} type="text" onChange={props.onChange}/>
        <button onClick={props.nextButton}>LOGIN</button>
      </form>
    </div>
  )
}
