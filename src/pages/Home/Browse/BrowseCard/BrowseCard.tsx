import { Link } from "react-router-dom";
import { FC } from "react";
import styles from "../browse.module.scss";

interface IBrowseCard {
    cardName: string;
    image: string;
}

const BrowseCard: FC<IBrowseCard> = ({ cardName, image }) => {
    // const [searchParams, setSearchParams] = useSearchParams()

    // const handleFilterChange = (key: string, value: string) => {
    //     setSearchParams(prev => {
    //         if (value === null) {
    //             prev.delete(key)
    //         }
    //         else {
    //             prev.set(key, value)
    //         }
    //         return prev
    //     })
    // }

    // state={{ search: searchParams.toString() }}

    return (
        <Link to={`shop/?style=${cardName.toLowerCase()}`} className={styles.card}>
            <p className={styles.cardName}>{cardName}</p>
            <img src={image} className={styles.cardImage} alt="browseImage" />
        </Link>
    );
};

export default BrowseCard;
