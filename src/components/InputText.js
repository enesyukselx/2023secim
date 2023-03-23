"use client";

import styles from "./InputText.module.scss";

const InputText = (props) => {
    return (
        <div className={styles.input}>
            <input
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default InputText;
