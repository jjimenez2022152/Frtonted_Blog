import { useState } from "react";
import { postComment as postCommentRequest } from "../services/api";

export const useCreateComment = () => {
    const [comment, setComment] = useState([]);
    const [error, setError] = useState(null);
    const postComment = async (form, publicacion, comentarioPadre) => {
        const responseData = await postCommentRequest(form, publicacion, comentarioPadre)
        if (responseData.error) {
            setError(responseData.e)
        }
        setComment(responseData.data)
    }
    return {
        comment,
        error,
        postComment,
        setComment
    }
}