import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ComentsContainer } from "../components/CommentForm";
import '../App.css';
import { Link } from "react-router-dom";

export const Post = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams()
    console.log({ id })

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
        <>
            <div className="publications-all">
                <div className="post-title">{post.titulo}</div>
                <div className="post-text">{post.texto}</div>
                <div className="avatar-container">
                    <img src={post.avatarUrl} alt="Avatar" className="avatar-image" />
                </div>

                <br />
                <div><a href={post.gitHub} target="_blank" rel="noopener noreferrer">Ver en GitHub</a></div>
                <br />
                <ComentsContainer postId={id} />
                <br />
                <Link to="/my-projects">Regresar</Link>

            </div>
        </>
    )
}
