// import { NavLink } from "react-router-dom";

import styles from "./footer.module.scss";

// import svg1 from '../../assets/icons/twitter.svg'

import badge1 from "../../assets/footerBadges/b1.svg";
import badge2 from "../../assets/footerBadges/b2.svg";
import badge3 from "../../assets/footerBadges/b3.svg";
import badge4 from "../../assets/footerBadges/b4.svg";
import badge5 from "../../assets/footerBadges/b5.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.header}>SHOP.CO</h2>
            <p className={styles.text}>
                We have clothes that suits style and which you're proud to wear.
                From women to men.
            </p>

            <ul className={styles.iconList}>
                <li className={styles.icon}>
                    {/* <img src={svg1} alt="" /> */}
                </li>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
            </ul>
            <ul className={styles.footerLinks}>
                <li className={styles.listItem}>
                    <h4 className={styles.itemHeader}>company</h4>
                    <div className={styles.linksContainer}>
                        <a className={styles.link}>About</a>
                        <a className={styles.link}>Features</a>
                        <a className={styles.link}>Works</a>
                        <a className={styles.link}>Career</a>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <h4 className={styles.itemHeader}>help</h4>
                    <div className={styles.linksContainer}>
                        <a className={styles.link}>Customer Support</a>
                        <a className={styles.link}>Delivery Details</a>
                        <a className={styles.link}>Terms & Conditions</a>
                        <a className={styles.link}>Privacy Policy</a>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <h4 className={styles.itemHeader}>faq</h4>
                    <div className={styles.linksContainer}>
                        <a className={styles.link}>Account</a>
                        <a className={styles.link}>Manage Deliveries</a>
                        <a className={styles.link}>Orders</a>
                        <a className={styles.link}>Payment</a>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <h4 className={styles.itemHeader}>resources</h4>
                    <div className={styles.linksContainer}>
                        <a className={styles.link}>Free eBook</a>
                        <a className={styles.link}>Development Tutorial</a>
                        <a className={styles.link}>How to - Blog</a>
                        <a className={styles.link}>Youtube Playlist</a>
                    </div>
                </li>
            </ul>
            <div className="line"></div>
            <div className={styles.under}>
                <p className={styles.underText}>
                    Shop.co @2000-2023, All Rights Reserved
                </p>
            </div>
            <ul className={styles.payment}>
                <li className={styles.paymentIcon}>
                    <img
                        src={badge1}
                        alt="paymentIcon"
                        className={styles.iconImg}
                    />
                </li>
                <li className={styles.paymentIcon}>
                    <img
                        src={badge2}
                        alt="paymentIcon"
                        className={styles.iconImg}
                    />
                </li>
                <li className={styles.paymentIcon}>
                    <img
                        src={badge3}
                        alt="paymentIcon"
                        className={styles.iconImg}
                    />
                </li>
                <li className={styles.paymentIcon}>
                    <img
                        src={badge4}
                        alt="paymentIcon"
                        className={styles.iconImg}
                    />
                </li>
                <li className={styles.paymentIcon}>
                    <img
                        src={badge5}
                        alt="paymentIcon"
                        className={styles.iconImg}
                    />
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
