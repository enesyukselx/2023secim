import Image from "next/image";
import styles from "./CandicateImage.module.scss";

const CandicateImage = (props) => {
    return (
        <div className={styles.images}>
            <Image src={props.url} height="110" width="110" alt={props.alt} />
        </div>
    );
};

export default CandicateImage;
