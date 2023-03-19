import axiosClient from "./axiosClient";
const bookApi ={
    
    createBook(data){
        const url = `/api/booking`
        return axiosClient.post(url,data);
    },    payBook(data){
        const url = `/api/booking/pay`
        return axiosClient.post(url,data);
    },getBookedById(id){
        const url = `/api/booking/${id}`
        return axiosClient.get(url);
    }
    
};

export default bookApi;