"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";

const Page = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(10);

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/api/anket");
        const data = await res.json();
        setData(data);
    };

    data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    const loadHandle = () => {
        if (startIndex < data.length) {
            setStartIndex(startIndex + 10);
        }
    };

    const writeDate = (date) => {
        const dateArr = date.split("-");
        const day = dateArr[2];
        const month = dateArr[1];
        const year = dateArr[0];

        const months = {
            "01": "Ocak",
            "02": "Şubat",
            "03": "Mart",
            "04": "Nisan",
            "05": "Mayıs",
            "06": "Haziran",
            "07": "Temmuz",
            "08": "Ağustos",
            "09": "Eylül",
            10: "Ekim",
            11: "Kasım",
            12: "Aralık",
        };

        return `${day} ${months[month]} ${year}`;
    };

    window.addEventListener("scroll", () => {
        if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 100
        ) {
            loadHandle();
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.inform}>
                <div className={styles.erdogan}>Recep Tayyip Erdoğan</div>
                <div className={styles.kk}>Kemal Kılıçdaroğlu</div>
                <div className={styles.ince}>Muharrem İnce</div>
                <div className={styles.other}>Diğer</div>
            </div>

            {data.slice(0, startIndex).map((item) => (
                <div className={styles.anket} key={item.id}>
                    <div className={styles.company}>
                        <div className={styles.name}>{item.company}</div>
                        <div className={styles.date}>
                            {writeDate(item.date)}
                        </div>
                    </div>
                    <div className={styles.result}>
                        <div
                            className={styles.erdogan}
                            style={{ width: `${item.result.erdogan}%` }}
                        >
                            {item.result.erdogan}%
                        </div>

                        <div
                            className={styles.kk}
                            style={{ width: `${item.result.kk}%` }}
                        >
                            {item.result.kk}%
                        </div>
                        <div
                            className={styles.ince}
                            style={{ width: `${item.result.ince}%` }}
                        >
                            {item.result.ince >= 5
                                ? `${item.result.ince}%`
                                : ""}
                        </div>
                        <div
                            className={styles.other}
                            style={{ width: `${item.result.other}%` }}
                        >
                            {item.result.other >= 5
                                ? `${item.result.other}%`
                                : ""}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
