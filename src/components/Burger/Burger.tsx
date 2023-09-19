import styles from "./burger.module.scss";
import { motion } from "framer-motion";

const Burger = ({ handleBurgerClose }) => {
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
                <li className={styles.item}>Home</li>
            </ul>
        </motion.div>
    );
};

export default Burger;
