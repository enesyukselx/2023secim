"use client";

import styles from "./InputText.module.scss";

const InputText = (props) => {
    const input =
        props.type === "password" ? (
            <input
                type="password"
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        ) : (
            <input
                type="text"
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        );

    return <div className={styles.input}>{input}</div>;
};

export default InputText;
