import axios from 'axios';
const axiosClient = axios.create({
    baseURL:'http://localhost:8088',

})
export default axiosClient;