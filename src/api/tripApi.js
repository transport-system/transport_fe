import axiosClient from "./axiosClient";
const tripApi ={
    
    getAllTrip(){
        const url = `/api/trip/all`
        return axiosClient.get(url,{}, { headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb21wYW55IiwiaWF0IjoxNjc3NTY0MTcxLCJleHAiOjE2Nzc1NjUwNzF9.FofFBZaETM9GShmqjvOdgs76c6Fv1Vm7NO1NwNaJR4E`}  });
    },getAllVehicle(){
        const url = `/api/vehicle/getAll`
        return axiosClient.get(url);        
    },getTripSearch(arrival,departure,date){
        const url = `/api/trip/customer/${arrival}/${departure}/${date}`
        return axiosClient.get(url);
    },getTripById(id){
        const url = `/api/trip/${id}`
        return axiosClient.get(url);
    }

    
};

export default tripApi;