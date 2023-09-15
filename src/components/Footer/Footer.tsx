import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.header}>SHOP.CO</h2>
            <p className={styles.text}>
                We have clothes that suits style and which you're proud to wear.
                From women to men.
            </p>
            <ul className={styles.iconList}>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
            </ul>
            <ul className={styles.footerLinks}></ul>
        </footer>
    );
};

export default Footer;
