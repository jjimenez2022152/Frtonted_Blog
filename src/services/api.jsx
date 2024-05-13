import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/gestorOpiniones/v1',
    timeout: 5000
})

export const getPost = async () => {
    try {
        return await apiClient.get(`/publications`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getComments = async (postId) => {
    try {
        return await apiClient.get(`/coment/${postId}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getChildComments = async (postId, commentId) => {

    try {
        return await apiClient.get(`/coment/${postId}/${commentId}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const postComment = async (form, publicacion, comentarioPadre) => {
    try {
        return await apiClient.post(`/coment/crear`, { ...form, idPublicacion: publicacion, comentarioPadre })
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}