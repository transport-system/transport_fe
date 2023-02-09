import axiosClient from "./axiosClient";

const userApi ={
    
    getUser(id){
        const url = `/api/login/${id}`
        return axiosClient.get(url);

    },
    updateUser(data){
        const url = `/api/users/${data.id}`
        return axiosClient.patch(url,data)
    },login:(payload)=>{
        const url = '/login'
        return axiosClient.post(url,payload);
    }
    
};

export default userApi;