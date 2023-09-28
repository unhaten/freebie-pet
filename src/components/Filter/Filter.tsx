import styles from './filter.module.scss'
import { motion } from 'framer-motion';

const Filter = () => {
    return (
        <>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5 }}
                className={styles.filter}>
                <h2>Filters</h2>
            </motion.div>
        </>
    );
}

export default Filter;