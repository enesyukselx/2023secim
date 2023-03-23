import styles from "./Alert.module.scss";

const Alet = ({ children }) => {
    return <div className={styles.alert}>{children}</div>;
};

export default Alet;
