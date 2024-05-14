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
        <div className="contenedor-padre">
            {comments.map((comment) => {
                return (
                    <CommentContainer key={comment._id} comentario={comment.comentario} username={comment.username} id={comment._id} publicacion={comment.publicacion} />
                )
            })}
            <FormContainer getComments={() => getComments(postId)} publicacion={postId} />
        </div>
    )
}

export const CommentContainer = ({ comentario, id, publicacion, username }) => {
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
        </div>
    )
}

const FormContainer = ({ getComments, publicacion }) => {
    const { postComment, error, comment, setComment } = useCreateComment()
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handlePostComment = (form) => {
        postComment(form, publicacion).then(() => {
            getComments();
            setShowForm(false); 
        });
    };

    return (
        <div>
            <button className="button-comment" onClick={toggleForm}>Comentar</button>
            {showForm && <Form onSubmit={handlePostComment} />}
        </div>
    );
}

const Form = ({ onSubmit }) => {
    const [form, setForm] = useState({ username: '', comentario: '' });

    const handleSubmit = () => {
        onSubmit(form);
        setForm({ username: '', comentario: '' });
    };

    return (
        <div className='comment-form-container'>
            <div className="nickname-container ">
                <span>Nickname</span>
                <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} type="text" />
            </div>
            <textarea value={form.comentario} onChange={(e) => setForm({ ...form, comentario: e.target.value })} placeholder="Comentario..." id="" cols="30" rows="10"></textarea>
            <div className="button-container">
                <div onClick={handleSubmit} className="button-submit">
                    Enviar
                </div>
            </div>
        </div>
    )
}
