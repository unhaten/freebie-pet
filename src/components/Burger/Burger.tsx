import styles from "./burger.module.scss";
import { motion } from "framer-motion";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IBurger {
    handleBurgerClose(): void;
}

const Burger: FC<IBurger> = ({ handleBurgerClose }) => {
    return (
        <motion.div
            className={styles.burger}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}

        >
            <button className={styles.close} onClick={handleBurgerClose}>
                Close
            </button>
            <ul className={styles.list}>
                <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.active} ${styles.item}` : `${styles.item}`} onClick={handleBurgerClose}>
                    Home
                </NavLink>
                <NavLink to="shop" className={({ isActive }) => isActive ? `${styles.active} ${styles.item}` : `${styles.item}`} onClick={handleBurgerClose}>
                    Shop
                </NavLink>
            </ul>
        </motion.div>
    );
};

export default Burger;
