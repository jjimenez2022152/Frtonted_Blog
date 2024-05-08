import { useState } from "react";
import { getPost as getPostRequest } from "../services/api.jsx";


export const usePost = () => {
    const [posts, setPosts] = useState();

    const getPost = async () => {
        const responseData = await getPostRequest()

        if(responseData.error){
            console.log("asdasdhaksdj")
        }
        setPosts(responseData.data)
    }

    return{
        posts,
        isFetching: !posts,
        getPost
    }
}