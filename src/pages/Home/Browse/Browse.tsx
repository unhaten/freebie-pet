import styles from "./browse.module.scss";
import BrowseCard from "./BrowseCard/BrowseCard";

import data from "./browseData";

const Browse = () => {
    const browseCardList = data.map((item) => (
        <BrowseCard cardName={item.name} image={item.image}></BrowseCard>
    ));

    return (
        <section className={styles.browse}>
            <div className={styles.browseContent}>
                <h2 className={styles.header}>BROWSE BY DRESS STYLE</h2>
                <ul className={styles.browseList}>{browseCardList}</ul>
            </div>
        </section>
    );
};

export default Browse;
