import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <button>LOGIN</button>
      </form>
    </div>
  )
}
