"use client";
import styles from "./Tooltip.module.scss";

const Tooltip = (props) => {
    const candicates = props.data.candidates
        .map((candicate) => {
            return {
                name: candicate.name,
                lastname: candicate.lastname,
                imageUrl: candicate.imageUrl,
                color: candicate.color,
                percent: candicate.percent,
            };
        })
        .sort((a, b) => {
            return b.percent - a.percent;
        });

    return (
        <div
            className={styles.tooltip}
            style={{
                left: props.mousePosition.x,
                top: props.mousePosition.y,
            }}
        >
            <div className={styles.cityname}>{props.cityName}</div>

            {candicates.map((candidate) => {
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
