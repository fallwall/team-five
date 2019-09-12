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
      },
      views: {
        loginView: true,
        scaleView: false,
        submitView: false
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

  toScalerView = () => {
    this.setState({
      views: {
        loginView: false,
        scaleView: true,
        submitView: false
      }
    })
  }

  toSubmitView = () => {
    this.setState({
      views: {
        loginView: false,
        scaleView: false,
        submitView: true
      }
    })
  }

  toLoginView = async () => {
    const resp = await postLog(this.state.formData);
    console.log(resp);
    this.setState({
      views: {
        loginView: true,
        scaleView: false,
        submitView: false
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.views.loginView &&
          <Login
            onChange={this.handleChange}
            nextButton={this.toScalerView}
            username={this.state.formData.username}
          />
        }
        {this.state.views.scaleView &&
          <Scaler
            onChange={this.handleChange}
            nextButton={this.toSubmitView}
            feeling_scale={this.state.formData.feeling_scale}
          />
        }
        {this.state.views.submitView &&
          <Wordbank
            onChange={this.handleChange}
            nextButton={this.toLoginView}
            comment={this.state.formData.comment}
          />
        }
      </div>
    );
  }
}

export default App;
