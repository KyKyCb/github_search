import axios from 'axios';
import { BASE_URL } from '../constants/apiConstants';


const $api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/vnd.github.v3+json',
  }
})

export default $api;
