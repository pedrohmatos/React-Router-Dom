import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";
import MenuLink from "./MenuLink";

function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink destino={"/"}>
                    Início
                </MenuLink>
                <MenuLink destino={"/sobremim"}>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu