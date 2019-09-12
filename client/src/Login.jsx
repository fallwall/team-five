import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div class="login-div">
      <form>
        <label class="name-label" htmlFor="name">Name</label>
        <input class="name-input" type="text" /><br/>
        <button>LOGIN</button>
      </form>
    </div>
  )
}
