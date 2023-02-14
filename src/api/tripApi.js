import axiosClient from "./axiosClient";
const tripApi ={
    
    getAllTrip(id){
        const url = `/api/company/${id}`
        return axiosClient.get(url);
    },
 
    
};

export default tripApi;