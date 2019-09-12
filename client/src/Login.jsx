import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div class="login-div">
      <form>
        <div class="form-content">
        <label class="name-label" htmlFor="username">Name</label>
        <input class="name-input" name="username" value={props.username} type="text" onChange={props.onChange}/>
        <label class="password-label" htmlFor="password">Password</label>
        <input class="password-input" name="password" type="password"/>
        </div>
        <div class="button-div">
        <button class="login-button" onClick={props.nextButton}>Login</button>
        </div>
      </form>
    </div>
  )
}
