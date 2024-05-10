import { useState } from "react";
import { usePost } from "../hooks/usePosts";
import '../App.css';

const URL = "http://localhost:8080/gestorOpiniones/v1/publications";

export const ProjectsList = () => {
    const { posts, getPost, isFetching } = usePost();

    if (!posts) {
        getPost();
    }

    if (isFetching) {
        return <div className="">cargando</div>;
    }

    console.log(posts);

    const postsUI = posts.map((post) => (
        <CardPost
            titulo={post.titulo}
            key={post.titulo}
            texto={post.texto}
            avatarUrl={post.avatarUrl}
            gitHub={post.gitHub}
        />
    ));

    return postsUI;
};

function CardPost({ titulo, texto, avatarUrl, gitHub }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const toggleShowLess = () => {
        setShowMore(false);
    };

    return (
        <div className="publications-all">
            <div>{titulo}</div>
            {!showMore && <button id="ver-mas" className="button" onClick={toggleShowMore}>Ver más</button>}
            {showMore && (
                <>
                    <div>{texto}</div>
                    <div><img src={avatarUrl} alt="Avatar" className="avatar-image" /></div>
                    <div><a href={gitHub} target="_blank" rel="noopener noreferrer">Ver en GitHub</a></div>
                    <button id="ver-menos" className="button button-outline" onClick={toggleShowLess}>Ver menos</button>
                </>
            )}
        </div>
    );
}
