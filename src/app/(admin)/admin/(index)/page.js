"use client";

import React from "react";
import styles from "./page.module.scss";

import Stats from "@/components/Stats";

const Page = () => {
    return (
        <div className={styles.content}>
            <h1>Admin Paneli</h1>
            <Stats />
        </div>
    );
};

export default Page;
