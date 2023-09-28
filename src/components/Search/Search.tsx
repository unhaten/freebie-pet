import { motion } from 'framer-motion';
import styles from './search.module.scss'

const Search = () => {
    return (<motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.search} placeholder='Search for products...'></motion.input>);
}

export default Search;