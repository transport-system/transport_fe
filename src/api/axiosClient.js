import axios from 'axios';
const axiosClient = axios.create({
    baseURL:'https://reqres.in/',

})
export default axiosClient;