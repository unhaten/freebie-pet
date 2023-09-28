import Nav from "./Nav/Nav";
import styles from "./Nav/nav.module.scss";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Nav></Nav>
            </header>
            <div className="line"></div>
        </>
    );
};

export default Header;
