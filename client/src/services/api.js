import axios from 'axios';

const BASE_URL = 'https://gentle-atoll-20119.herokuapp.com';

const api = axios.create({
  baseURL: BASE_URL
})

export const getLogs = async() => {
  const resp = await api.get('/auth/login')
  return resp.data
}

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