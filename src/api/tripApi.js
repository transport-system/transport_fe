import axiosClient from "./axiosClient";
const tripApi ={
    
    getAllTrip(){
        const url = `/api/trip/all`
        return axiosClient.get(url);
    },getAllVehicle(){
        const url = `/api/vehicle/getAll`
        return axiosClient.get(url);        
    },getTripSearch(arrival,departure,date){
        const url = `/api/trip/customer/${arrival}/${departure}/${date}`
        return axiosClient.get(url);
    },getTripById(id){
        const url = `/api/trip/${id}`
        return axiosClient.get(url);
    },getSeatById(id){
        const url = `/api/seat/vehicle/${id}`
        return axiosClient.get(url); 
    },getTripPopular(arrival,departure){
        const url = `/api/trip/customer/${arrival}/${departure}/`
        return axiosClient.get(url);
    }

    
};

export default tripApi;