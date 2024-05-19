import axios from 'axios';

const client = axios.create({
  baseURL: 'https://evee-backend-24d42739ea4e.herokuapp.com:8000',
});

export default client;
