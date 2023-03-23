import axiosClient from "./axiosClient";
const paymentApi ={
    
    payLater(data){
        const url = `/api/booking/pay`
        return axiosClient.post(url,data);
    },
    
};

export default paymentApi;