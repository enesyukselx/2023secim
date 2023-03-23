import styles from "./Stats.module.scss";

const Stats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.stat}>
                <div className={styles.stat__title}>Toplam Kullanıcı</div>
                <div className={styles.stat__value}>1</div>
            </div>
            <div className={styles.stat}>
                <div className={styles.stat__title}>Toplam Video</div>
                <div className={styles.stat__value}>25</div>
            </div>
            <div className={styles.stat}>
                <div className={styles.stat__title}>Toplam Anket</div>
                <div className={styles.stat__value}>14</div>
            </div>
        </div>
    );
};

export default Stats;
