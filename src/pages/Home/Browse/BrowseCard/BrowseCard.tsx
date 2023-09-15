import styles from "../browse.module.scss";

const BrowseCard = ({ cardName = "", image = "" }) => {
    return (
        <li className={styles.card}>
            <p className={styles.cardName}>{cardName}</p>
            <img src={image} className={styles.cardImage} alt="browseImage" />
        </li>
    );
};

export default BrowseCard;
