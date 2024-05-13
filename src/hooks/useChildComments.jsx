import { useState } from "react"
import { getChildComments as getCommentsRequest } from "../services/api";

export const useChildComments = () => {
    const [childComments, setChildComments] = useState();

    const getComments = async (postid, id) => {
        const responseData = await getCommentsRequest(postid, id)

        if (responseData.error) {
            console.log("asdasdhaksdj")
        }
        setChildComments(responseData.data)
    }

    return {
        childComments,
        isFetching: !childComments,
        getComments
    }
}