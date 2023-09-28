import styles from './profile.module.scss'

const Profile = () => {
    return (<>
        <section className={styles.profile}>
            <h2 className={styles.header}>
                Welcome to your profile, user
            </h2>
        </section>
    </>);
}

export default Profile;