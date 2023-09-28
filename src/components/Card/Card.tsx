import styles from "./card.module.scss";
// import data from "./cardData"
import { FC } from 'react'
import { Link } from "react-router-dom";

interface ICard {
    data: object[];
    small?: boolean;
    path?: string;
}

const Card: FC<ICard> = ({ data, small, path }) => {
    const cardData = data.map(item => (
        <>
            <li className={small ? `${styles.smallCard}` : `${styles.card}`}>
                <Link to={path ? `/shop/${item.id}` : `${item.id}`}>
                    <div className={styles.cardImageContainer}>
                        <img src={item.image} alt="cardImage" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.name}>
                            {item.name}
                        </p>
                        <div className={styles.starContainer}>
                            <div className={styles.starBadges}></div>
                            <div className={styles.starRate}>
                                {item.rate}/<span className={styles.starOverallNumber}>
                                    5
                                </span>
                            </div>
                        </div>
                        <div className={styles.priceContainer}>
                            <p className={styles.price}>${item.price}</p>
                            {item.initialPrice ? <p className={styles.initialPrice}>${item.initialPrice}</p> : null}
                            {item.discountPercentage ? <div className={styles.discount}>-{item.discountPercentage}%</div> : null}
                        </div>
                    </div>
                </Link>
            </li>
        </>
    ))

    return <>
        {cardData}
    </>;
};

export default Card;
