import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL
})

export const postLog = async (data) => {
  const resp = await api.post('/logs', data);
  return resp.data;
}