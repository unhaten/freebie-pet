import styles from "./subscriptionForm.module.scss";

const SubscriptionForm = () => {
    return (
        <>
            <form className={styles.form}>
                <h2 className={styles.header}>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>
                <div className={styles.inputContainer}>
                    <span className={styles.inputIcon}></span>
                    <input type="text" className={styles.input} />
                </div>
                <button className={styles.button}>
                    Subscribe to Newsletter
                </button>
            </form>
        </>
    );
};

export default SubscriptionForm;
