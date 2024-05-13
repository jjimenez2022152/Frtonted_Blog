import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const Post = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams()
    console.log({id})

    useEffect(() => {
        async function getPostById() {
            fetch(`http://localhost:8080/gestorOpiniones/v1/publications/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setPost(result)
            })
            .catch((err) => {
                console.error(err)
            })
        }

        getPostById()
    }, [])
    
    if (!post) {
        return <div></div>
    }
    
    
  return (
    <div>
        <div>{post.titulo}</div>
        <div>{post.github}</div>
        <div>{post.texto}</div>
        <div>{post.avatarUrl}</div>
    </div>
  )
}
