import axiosClient from "./axiosClient";

const userApi ={
    getUser(id){
        const url = `/api/users/${id}`
        return axiosClient.get(url);

    },
    updateUser(data){
        const url = `/api/users/${data.id}`
        return axiosClient.patch(url,data)
    }
    
};

export default userApi;