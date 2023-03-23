"use client";

import styles from "./InputText.module.scss";
import { forwardRef, useRef } from "react";

const InputText = (props, ref) => {
    return (
        <div className={styles.input}>
            <input
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                ref={ref}
                {...props}
            />
        </div>
    );
};

export default forwardRef(InputText);
