import axios from 'axios';

const url = 'http://localhost:5000/'

const $host = axios.create({
  baseURL: url,
});

export {
  $host,
};