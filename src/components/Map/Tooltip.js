"use client";
import styles from "./Tooltip.module.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
        <>
            <ReactTooltip
                id={props.cityName}
                className={styles.reacttooltip}
                openOnClick={true}
                render={() => (
                    <div className={styles.tooltip}>
                        <div className={styles.cityname}>{props.cityName}</div>

                        {candicates.map((candidate) => {
                            return (
                                <div
                                    className={styles.candidate}
                                    key={Math.random()}
                                >
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
                )}
            />
        </>
    );
};

export default Tooltip;
