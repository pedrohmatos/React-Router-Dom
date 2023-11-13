import styles from "./Poster.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import Markdown from "react-markdown";

import posters from "../../json/posts.json";
import PosterModelo from "../../components/PosterModelo";

function Poster() {
    const parametros = useParams();
    const navigate = useNavigate();

    const [atual, setAtual] = useState({});

    useEffect(() => {
        const posterAtual = posters.find((el) => {
            return el.id === Number(parametros.id)
        });

        if (posterAtual) {
            setAtual(posterAtual);
        } else {
            navigate("/naoencontrada");
        }

    }, [parametros, navigate]);

    return (
        <PosterModelo
            fotoCapa={`/assets/posts/${parametros.id}/capa.png`}
            titulo={atual.titulo}
        >
            <div className={styles.postMarkdownContainer}>
                <Markdown>
                    {atual.texto}
                </Markdown>
            </div>
        </PosterModelo>
    )
}

export default Poster