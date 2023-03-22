import styles from "./page.module.scss";
import Videos from "./videos";

export default function Page() {
    return (
        <main className={styles.main}>
            <Videos />
        </main>
    );
}
