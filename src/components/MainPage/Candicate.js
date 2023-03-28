import styles from "./Candicate.module.scss";
import CandicateImage from "./CandicateImage";

const Candicate = (props) => {
    return (
        <div className={styles.candicate}>
            <div className={styles.candicate}>
                <div className="image">
                    <CandicateImage url={props.imageUrl} alt="icon" />
                </div>
                <div className={styles.name}>
                    <span>
                        {props.firstName} <br />
                        {props.lastName}
                    </span>
                </div>
                <div className={styles.result}>
                    <span
                        style={{
                            width: parseFloat(props.percent) + "%",
                            background: props.color,
                        }}
                    ></span>
                </div>
                <div className={styles.percent}>
                    <span>{props.percent}%</span>
                </div>
            </div>
        </div>
    );
};

export default Candicate;
