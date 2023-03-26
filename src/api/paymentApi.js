import axiosClient from "./axiosClient";
const paymentApi ={
    
    payLater(data){
        const url = `/api/booking/pay`
        return axiosClient.post(url,data);
    },applyVouncher(code){
        const url = `/api/voucher/getVoucherByCode/${code}`
        return axiosClient.get(url);
    }
    
};

export default paymentApi;