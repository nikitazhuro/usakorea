import axios from 'axios';

const url = 'https://api.autosaya.by/'

const $host = axios.create({
  baseURL: url,
});

export {
  $host,
};