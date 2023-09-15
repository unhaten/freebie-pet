import styles from "./goods.module.scss";

import Card from "../../../components/Card/Card";

const Goods = () => {
    return (
        <section className={styles.goods}>
            <div className={styles.newArrivals}>
                <h2 className={styles.header}>NEW ARRIVALS</h2>
                <div className={styles.arrivalsSlider}>
                    <Card></Card>
                </div>
                <button className={styles.arrivalsButton}>View All</button>
            </div>
            <div className="line"></div>
            <div className={styles.topSelling}>
                <h2 className={styles.header}>TOP SELLING</h2>
                <div className={styles.sellingSlider}>
                    <Card></Card>
                </div>
                <button className={styles.sellingButton}>View All</button>
            </div>
        </section>
    );
};

export default Goods;
