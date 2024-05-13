import { useState } from "react"
import { getComments as getCommentsRequest } from "../services/api";

export const useComments = () => {
    const [comments, setComments] = useState();

    const getComments = async (id) => {
        const responseData = await getCommentsRequest(id)

        if (responseData.error) {
            console.log("asdasdhaksdj")
        }
        setComments(responseData.data)
    }

    return {
        comments,
        isFetching: !comments,
        getComments
    }
}