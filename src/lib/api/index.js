import axios from 'axios';

const host_server = 'https://api.autosaya.by/';
const host_local = 'http://localhost:5000/'

const $host = axios.create({
  baseURL: host_local,
});

export {
  $host,
};