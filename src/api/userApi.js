import axiosClient from "./axiosClient";

const userApi ={
    
    getUser(id){
        const url = `/users/${id}`
        return axiosClient.get(url);

    },
    updateUser(id,data){
        const url = `/users/${id}`
        return axiosClient.patch(url,data)
    },login(){
        const url = `auth/login`
        return axiosClient.patch(url)}
    

    
};

export default userApi;