import axiosClient from "./axiosClient"

const todoApi = {
    getAll(params){
        const url = "/notes/"
        return axiosClient.get(url, {params});
    },
    get(id){
        const url = `/notes/${id}`;
        return axiosClient.get(url);return 
    },
    add(data){
        const url = '/notes/create';
        return axiosClient.post(url, data);
    },
    update(data){
        const url = `/notes/${data.id}`;
        return axiosClient.patch(url, data);
    },
    delete(id){
        const url = `/notes/${id}`;
        return axiosClient.delete(url);
    }
}

export default todoApi;