import styles from "./BotaoPrincipal.module.css";

function BotaoPrincipal({ children, tamanho }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${tamanho && styles.lg}
        `}>
            {children}
        </button>
    )
}

export default BotaoPrincipal