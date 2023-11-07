import axios, { Axios } from 'axios';

const apiURL: string = process.env.NEXT_PUBLIC_API_URL || '';

const API = axios.create({
  baseURL: apiURL,
}) as Axios;

export default API;
