"use client";
import styles from "./Tooltip.module.scss";

const Tooltip = (props) => {
    return (
        <div
            className={styles.tooltip}
            style={{
                left: props.mousePosition.x,
                top: props.mousePosition.y,
            }}
        >
            <div className={styles.cityname}>{props.cityName}</div>

            {props.data.candidates.map((candidate) => {
                return (
                    <div className={styles.candidate} key={Math.random()}>
                        <div className={styles.candidateName}>
                            {candidate.name}
                        </div>
                        <div className={styles.candidatePercent}>
                            {candidate.percent.toFixed(2)} %
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Tooltip;
