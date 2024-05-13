import { useState } from "react"
import { useComments } from "../hooks/useComments"
import { useChildComments } from "../hooks/useChildComments"
import { useCreateComment } from "../hooks/useCreateComment"
import "./Comment.css"

export function ComentsContainer({ postId }) {
    const { comments, isFetching, getComments } = useComments()

    if (isFetching) {
        getComments(postId)
        return <div>....cargando</div>
    }


    return (
        <div>
            {comments.length === 0 && (
                <Form getComments={() => getComments(postId)} publicacion={postId} onSubmit={() => {
                    getComments(postId)
                }} />
            )}
            {comments.map((comment) => {
                return (
                    <CommentContainer key={comment._id} comentario={comment.comentario} username={comment.username} id={comment._id} publicacion={comment.publicacion} />
                )
            })}
        </div>
    )
}

export const CommentContainer = ({ comentario, id, publicacion, username }) => {
    const [isThreadOpen, setIsThreadOpen] = useState(false)
    const [isReponse, setIsResponse] = useState(false)
    const { childComments, isFetching, getComments } = useChildComments(publicacion, id)

    if (isFetching) {
        getComments(publicacion, id)
        return <div>cargando</div>
    }

    console.log({ comentario, childComments })
    return (
        <div className="response">
            <div className="comment">
                <h3>
                    {username}
                </h3>
                <span>
                    {comentario}
                </span>
            </div>
            <div className="align-end">
                <button className="button-submit" onClick={() => setIsResponse(!isReponse)} >Responder</button>
            </div>
            {isReponse && <Form getComments={() => getComments(publicacion, id)} publicacion={publicacion} id={id} onSubmit={() => {
                setIsResponse(false);
                getComments(publicacion, id)
            }} />}
            {childComments.length > 0 && (
                <div className="responses-container">
                    <div>
                        {isThreadOpen && childComments.map((comment) => {
                            return (
                                <div style={{
                                    display: 'flex',
                                }}
                                    key={comment._id}
                                >
                                    <div
                                        style={{
                                            borderLeft: '3px solid gray',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            setIsThreadOpen(!isThreadOpen)
                                        }}
                                    />
                                    <div style={{
                                        marginLeft: '20px',
                                    }}>
                                        <CommentContainer comentario={comment.comentario} username={comment.username} id={comment._id} publicacion={comment.publicacion} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {!isThreadOpen && (
                        <div className="">
                            <button onClick={() => setIsThreadOpen(!isThreadOpen)} className="see-more">Ver respuestas</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

const Form = ({ getComments, publicacion, id, onSubmit }) => {
    const { postComment, error, comment, setComment } = useCreateComment()
    const [form, setForm] = useState({ username: '', comentario: '' })


    if (comment && !error) {
        getComments();
        setComment(null);
    }

    return (
        <div className='comment-form-container'>
            <div className="nickname-container ">
                <span>Nickname</span>
                <input onChange={(e) => setForm((form) => ({ ...form, username: e.target.value }))} type="text" />
            </div>
            <textarea onChange={(e) => setForm((form) => ({ ...form, comentario: e.target.value }))} placeholder="Comentario..." id="" cols="30" rows="10"></textarea>
            <div className="button-container">
                <div onClick={() => {
                    postComment(form, publicacion, id).then(() => {
                        onSubmit();
                    })
                }} className="button-submit">
                    Enviar
                </div>
            </div>
        </div>
    )
}