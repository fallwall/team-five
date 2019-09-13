import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div className="login-div">
      <form>
        <div className="form-content">
          <label className="name-label" htmlFor="username">Name</label>
          <input className="name-input" name="username" value={props.username} type="text" onChange={props.onChange} />
          <label className="password-label" htmlFor="password">Password</label>
          <input className="password-input" name="password" type="password" value={props.password} onChange={props.onChange} />
          <label className="password-label hidden" htmlFor="account_type">Account Type</label>

          <select className="hidden" name="account_type" value={props.account_type} onChange={props.onChange}>
            <option name="account_type" value="student">Student</option>
            <option name="account_type" value="teacher">Teacher</option>
          </select>
        </div>
        <div className="button-div">
          <button className="login-button" onClick={props.onSubmit}>Login</button>
          <button className="login-button" onClick={props.toRegisterView}>Register</button>
        </div>
      </form>
    </div>
  )
}
