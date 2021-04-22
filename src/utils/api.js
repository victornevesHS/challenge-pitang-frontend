import axios from 'axios';


const { REACT_APP_API_BASE_URL: apiBaseURL } = process.env;

const myAxios = axios.create({
  baseURL: apiBaseURL || 'http://localhost:3333/',
});

export default myAxios;