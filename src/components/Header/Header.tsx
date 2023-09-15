import Nav from "./Nav/Nav";
import styles from "./Nav/nav.module.scss";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Nav></Nav>
            </header>
        </>
    );
};

export default Header;
