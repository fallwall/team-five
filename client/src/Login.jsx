import React from 'react';
import Jump from 'react-reveal/Jump';
import './login.css';

export default function Login(props) {
  return (
    <div className="login-div">
      <form>
        <div className="form-content">
        <label className="name-label" htmlFor="username">Name</label>
        <input className="name-input" name="username" value={props.username} type="text" onChange={props.onChange}/>
        <label className="password-label" htmlFor="password">Password</label>
        <input className="password-input" name="password" type="password" value={props.password} onChange={props.onChange}/>
        </div>
        <div className="button-div">
        <button className="login-button" onClick={props.onSubmit}><Jump>Login</Jump></button>
        <button className="login-button" onClick={props.toRegisterView}><Jump>Register</Jump></button>
        </div>
      </form>
    </div>
  )
}
