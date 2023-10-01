import styles from "./reviews.module.scss";
import star from "../../../assets/icons/Star.svg";
import certified from "../../../assets/icons/certified.svg";

import data from "./reviewsData";

const Reviews = () => {
    const reviews = data.map((item, index) => (
        <li key={index} className={styles.card}>
            <div className={styles.rate}>
                {item.rate === 5 ? (
                    <>
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                    </>
                ) : item.rate === 4 ? (
                    <>
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                    </>
                ) : item.rate === 3 ? (
                    <>
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                    </>
                ) : item.rate === 2 ? (
                    <>
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                    </>
                ) : item.rate === 1 ? (
                    <>
                        <img
                            src={star}
                            alt="star"
                            className={styles.starIcon}
                        />
                    </>
                ) : null}
            </div>
            <div className={styles.nameContainer}>
                <h4 className={styles.name}>{item.name}</h4>
                <span className={styles.certified}>
                    {item.certified ? (
                        <img src={certified} alt="certified" />
                    ) : (
                        "NOT CERTIFIED"
                    )}
                </span>
            </div>
            <p className={styles.reviewText}>{item.text}</p>
        </li>
    ));

    return (
        <section className={styles.reviews}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>OUR HAPPY CUSTOMERS</h2>
                <div className={styles.sliderButtons}>
                    <button className={styles.buttonLeft}></button>
                    <button className={styles.buttonRight}></button>
                </div>
            </div>

            <ul className={styles.reviewsList}>{reviews}</ul>
        </section>
    );
};

export default Reviews;
