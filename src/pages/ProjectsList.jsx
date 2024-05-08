import { useEffect, useState } from "react"
import { usePost } from "../hooks/usePosts";

const URL = "http://localhost:8080/gestorOpiniones/v1/publications"

export const ProjectsList = () => {
    const {posts, getPost, isFetching} = usePost();

    if (!posts) {
        getPost();
    }
    
    if (isFetching) {
        return <div className="">cargando</div>
    }

    console.log(posts)


    const postsUI = posts.map((post) => <CardPost titulo={post.titulo} key={post.titulo} texto={post.texto} />);

    return postsUI;
}

function CardPost({ titulo, texto }) {
    return (
        <>
            <div>{titulo}</div>
            <div>{texto}</div>
    </>

)
}
