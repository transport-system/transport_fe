import axiosClient from "./axiosClient";

const userApi ={
    
    getUser(id){
        const url = `/users/${id}`
        return axiosClient.get(url);

    },
    updateUser(data){
        const url = `/api/users/${data.id}`
        return axiosClient.patch(url,data)
    },login(){
        const url = `auth/login`
        return axiosClient.patch(url)}
    

    
};

export default userApi;