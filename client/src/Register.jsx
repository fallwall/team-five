import React from 'react';

export default function Register(props) {
  return (
    <div className="register-div">
      <form>
        <div className="form-content">
          <label className="name-label" htmlFor="username">Name</label>
          <input className="name-input" name="username" value={props.username} type="text" onChange={props.onChange} />
          <label className="name-label" htmlFor="email">Email</label>
          <input className="email" name="email" type="text" value={props.email} onChange={props.onChange} />
          <label className="password-label" htmlFor="password">Password</label>
          <input className="password-input" name="password" type="password" value={props.password} onChange={props.onChange} />
        </div>
        <div className="button-div">
          <button className="login-button" onClick={props.nextButton}>Register</button>
        </div>
      </form>
    </div>
  )
}
