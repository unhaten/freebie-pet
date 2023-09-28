import { Link } from "react-router-dom";
import styles from "./goods.module.scss";
import data from "../../../components/Card/cardData";

import Card from "../../../components/Card/Card";

const Goods = () => {
    const newArrivals: object[] = []
    const topSelling: object[] = []
    data.map(item => item.newArrival ? newArrivals.push(item) : null)
    data.map(item => item.topSelling ? topSelling.push(item) : null)
    return (
        <section className={styles.goods}>
            <div className={styles.newArrivals}>
                <h2 className={styles.header}>NEW ARRIVALS</h2>
                <ul className={styles.arrivalsSlider}>
                    <Card data={newArrivals} path='shop'></Card>
                </ul>
                <Link to='shop/?type=new' className={styles.arrivalsButton}>View All</Link>
            </div>
            <div className="line"></div>
            <div className={styles.topSelling}>
                <h2 className={styles.header}>TOP SELLING</h2>
                <ul className={styles.sellingSlider}>
                    <Card data={topSelling} path='shop'></Card>
                </ul>
                <Link to='shop/?type=sale' className={styles.sellingButton}>View All</Link>
            </div>
        </section>
    );
};

export default Goods;
