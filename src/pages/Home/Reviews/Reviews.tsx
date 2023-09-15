import styles from "./reviews.module.scss";

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>OUR HAPPY CUSTOMERS</h2>
                <div className={styles.sliderButtons}>
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>

            <ul className={styles.reviewsList}>
                <li className={styles.card}>
                    <div className={styles.rate}>star</div>
                    <div className={styles.nameContainer}>
                        <h3 className={styles.name}>Sarah</h3>
                        <span className={styles.certified}>true</span>
                    </div>
                    <p className={styles.reviewText}>text</p>
                </li>
            </ul>
        </section>
    );
};

export default Reviews;
