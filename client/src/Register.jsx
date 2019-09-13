import React from 'react';
import Jump from 'react-reveal/Jump';
import './login.css';

export default function Register(props) {
  return (
    <div className="login-div">
      <form>
        <div className="form-content">
          <label className="name-label" htmlFor="username">Name</label>
          <input className="name-input" name="username" value={props.username} type="text" onChange={props.onChange} />
          <label className="name-label" htmlFor="email">Email</label>
          <input className="email" name="email" type="text" value={props.email} onChange={props.onChange} />
          <label className="password-label" htmlFor="password">Password</label>
          <input className="password-input" name="password" type="password" value={props.password} onChange={props.onChange} />
          <select className="hidden" name="account_type" value={props.account_type} onChange={props.onChange}>
            <option name="account_type" value="student">Student</option>
            <option name="account_type" value="teacher">Teacher</option>
          </select>
        </div>
        <div className="button-div">
          <button className="login-button" onClick={props.onSubmit}><Jump>Register</Jump></button>
          <button className="login-button" onClick={props.backtoLogin}><Jump>Back</Jump></button>
        </div>
      </form>
    </div>
  )
}
