import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/gestorOpiniones/v1',
    timeout: 5000
})

export const getPost = async () => {
    try{
        return await apiClient.get(`/publications`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}