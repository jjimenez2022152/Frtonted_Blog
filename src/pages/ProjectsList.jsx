import { useState } from "react";
import { usePost } from "../hooks/usePosts";
import '../App.css';
//import { ComentsContainer } from "../components/CommentForm";
import { Link } from "react-router-dom";


export const ProjectsList = () => {
    const { posts, getPost, isFetching } = usePost();

    if (!posts) {
        getPost();
    }

    if (isFetching) {
        return <div className="">cargando</div>;
    }

    console.log(posts);

    return (
        <div className="publications-container">
            {posts.map((post) => (
                <CardPost
                    titulo={post.titulo}
                    key={post.titulo}
                    texto={post.texto}
                    avatarUrl={post.avatarUrl}
                    gitHub={post.gitHub}
                    id={post._id}
                />
            ))}
        </div>
    )
};

function CardPost({ titulo, texto, avatarUrl, gitHub, id }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        // setShowMore(!showMore);
    };

    const toggleShowLess = () => {
        // setShowMore(false);
    };

    console.log({ id }, "parent")

    return (
        <div className="publications-all">
            <div className="post-title">{titulo}</div>
            {!showMore && <Link to={`/my-projects/${id}`} id="ver-mas" className="button1" onClick={toggleShowMore}>Ver más</Link>}
        </div>
    );
}
