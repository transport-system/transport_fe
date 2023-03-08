import axiosClient from "./axiosClient";
const bookApi ={
    
    createBook(data){
        const url = `/api/booking`
        return axiosClient.post(url,data);
    },    payBook(data){
        const url = `/api/booking/pay`
        return axiosClient.post(url,data);
    },
    
};

export default bookApi;