import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL
})

export const loginUser = async(loginData) => {
  const resp = await api.post('/auth/login', loginData)
  return resp.data
}

export const registerUser = async(registerData) => {
  const resp = await api.post('/users/', {user: registerData})
  return resp.data
}

export const postLog = async (data) => {
  const resp = await api.post('/logs', data);
  return resp.data;
}