import { Link } from "react-router-dom";
import styles from "./PosterCard.module.css";
import BotaoPrincipal from "../BotaoPrincipal";

function PosterCard({ conteudo }) {

    return (
        <Link to={`/posters/${conteudo.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`assets/posts/${conteudo.id}/capa.png`}
                    alt=""
                />
                <h2 className={styles.titulo}>
                    {conteudo.titulo}
                </h2>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PosterCard