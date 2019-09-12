import React from 'react';

export default function Register(props) {
  return (
    <div className="register-div">
      <form>
        <div className="form-content">
          <label className="name-label" htmlFor="username">Name</label>
          <input className="name-input" name="username" value={props.username} type="text" onChange={props.onChange} />
          <input className="email" name="email" />
          <label className="password-label" htmlFor="password">Password</label>
          <input className="password-input" name="password" type="password" />
        </div>
        <div className="button-div">
          <button className="login-button" onClick={props.nextButton}>Register</button>
        </div>
      </form>
    </div>
  )
}
