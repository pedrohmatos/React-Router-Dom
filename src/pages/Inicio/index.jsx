import styles from "./Inicio.module.css";
import PosterCard from "../../components/PosterCard";

import posts from "../../json/posts.json";

function Inicio() {
    return (
        <ul className={styles.posts}>
            {
                posts.map((obj) => {
                    return (
                        <li key={obj.id}>
                            <PosterCard conteudo={obj} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Inicio