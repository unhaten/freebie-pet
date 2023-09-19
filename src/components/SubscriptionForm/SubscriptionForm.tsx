import styles from "./subscriptionForm.module.scss";

import mail from "../../assets/icons/mail.svg";

const SubscriptionForm = () => {
    return (
        <>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <h2 className={styles.header}>
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className={styles.inputContainer}>
                        <span className={styles.inputIcon}>
                            <img src={mail} alt="mail" />
                        </span>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Enter your email address"
                        />
                    </div>
                    <button className={styles.button}>
                        Subscribe to Newsletter
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubscriptionForm;
