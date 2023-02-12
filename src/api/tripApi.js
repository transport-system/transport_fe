import axiosClient from "./axiosClient";
const tripApi ={
    
    getAllTrip(){
        const url = `/products`
        return axiosClient.get(url);
    },
 
    
};

export default tripApi;