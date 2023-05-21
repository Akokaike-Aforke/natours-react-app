import axios from 'axios';
const customFetch = axios.create({
  // baseURL: "http://localhost:3000/api/v1/tours",
  baseURL: "https://natours-sample8.onrender.com/api/v1/tours",
  headers: {
    "Content-type": "application/json",
  },
});
export default customFetch;