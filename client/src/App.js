import React, { Component } from 'react';
import { postLog } from './services/api';

import Scaler from './Scaler';
import Login from './Login';
import Wordbank from './Wordbank';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        username: "",
        feeling_scale: "",
        feelings: "",
        comment: ""
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmit = async () => {
    const resp = await postLog(this.state.formData);
    console.log(resp);
   }
  

  render() {
    return (
      <div className="App">
      
          <Login
            onChange={this.handleChange}
          
            username={this.state.formData.username}
          />
     
          <Scaler
            onChange={this.handleChange}
         
            feeling_scale={this.state.formData.feeling_scale}
          />
   

          <Wordbank
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            comment={this.state.formData.comment}
          />
        
      </div>
    );
  }
}

export default App;
