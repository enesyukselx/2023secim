import Candicate from "./Candicate";
import styles from "./Candicates.module.scss";
import candicates2018 from "@/constants/candicates18";
import candicates2023 from "@/constants/candicates23";

const Candicates = (props) => {
    let candicates = props.year === "2018" ? candicates2018 : candicates2023;

    return (
        <div className={styles.candicates}>
            {candicates.map((candicate) => {
                return (
                    <Candicate
                        key={candicate.id}
                        imageUrl={candicate.imageUrl}
                        firstName={candicate.name}
                        lastName={candicate.lastname}
                        percent={candicate.percent}
                        color={candicate.color}
                    />
                );
            })}
        </div>
    );
};

export default Candicates;
