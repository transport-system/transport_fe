import axios from 'axios';
const axiosPrivate = axios.create({
    baseURL:'https://transport-springboot.herokuapp.com',
    timeout:15000,
    headers: {
        'Authorization':`Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      }

})
export default axiosPrivate;