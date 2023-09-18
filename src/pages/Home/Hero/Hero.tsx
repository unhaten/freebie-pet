import styles from "./hero.module.scss";

import heroImage from "../../../assets/mobile-hero.png";
import svg1 from "../../../assets/brands/versace-logo.svg";
import svg2 from "../../../assets/brands/zara-logo.svg";
import svg3 from "../../../assets/brands/gucci-logo.svg";
import svg4 from "../../../assets/brands/prada-logo.svg";
import svg5 from "../../../assets/brands/calvin-klein-logo.svg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.mainHeader}>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className={styles.text}>
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>
                <button className={styles.button}>Shop Now</button>
                <ul className={styles.featureList}>
                    <li className={styles.featureItem}>
                        <div className={styles.featureContent}>
                            <p className={styles.featureUpperText}>200+</p>
                            <p className={styles.featureLowerText}>
                                International Brands
                            </p>
                        </div>
                    </li>
                    <li className={styles.featureItem}>
                        <div className={styles.featureContent}>
                            <p className={styles.featureUpperText}>2,000+</p>
                            <p className={styles.featureLowerText}>
                                High-Quality Products
                            </p>
                        </div>
                    </li>
                    <li className={styles.featureItem}>
                        <div className={styles.featureContent}>
                            <p className={styles.featureUpperText}>30,000+</p>
                            <p className={styles.featureLowerText}>
                                Happy Customers
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={styles.heroImageBlock}>
                <img
                    src={heroImage}
                    alt="hero-image"
                    className={styles.heroImage}
                />
            </div>
            <div className={styles.brands}>
                <img src={svg1} alt="brand-logo" />
                <img src={svg2} alt="brand-logo" />
                <img src={svg3} alt="brand-logo" />
                <img src={svg4} alt="brand-logo" />
                <img src={svg5} alt="brand-logo" />
            </div>
        </section>
    );
};

export default Hero;
