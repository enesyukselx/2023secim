"use client";
import { useState } from "react";
import styles from "./page.module.scss";

const Page = () => {
    const [videoId, setVideoId] = useState("");

    return (
        <div className={styles.content}>
            <h1>Video ekle</h1>
            <input type="text" onChange={(e) => setVideoId(e.target.value)} />
            <button
                onClick={() => {
                    console.log(videoId);
                }}
            >
                e
            </button>
        </div>
    );
};

export default Page;
