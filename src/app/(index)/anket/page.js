"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import getAllDocuments from "@/firebase/firestore/getAllDatas";

const Page = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(10);
    const [loading, setLoading] = useState(false);

    const firebaseData = async () => {
        const { result, error } = await getAllDocuments("polls");
        if (error) {
            console.log(error);
            return;
        }

        const data = [];
        result.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });

        setData(data);
        setLoading(true);
    };

    const loadHandle = () => {
        if (startIndex < data.length) {
            setStartIndex(startIndex + 10);
        }
    };

    useEffect(() => {
        firebaseData();
    }, []);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 100
            ) {
                loadHandle();
            }
        });
    }

    return (
        <div className={styles.main}>
            <div className={styles.inform}>
                <div className={styles.erdogan}>Recep Tayyip Erdoğan</div>
                <div className={styles.kk}>Kemal Kılıçdaroğlu</div>
                <div className={styles.ince}>Muharrem İnce</div>
                <div className={styles.other}>Sinan Oğan</div>
            </div>

            {data.slice(0, startIndex).map((item) => (
                <div className={styles.anket} key={item.id}>
                    <div className={styles.company}>
                        <div className={styles.name}>{item.title}</div>
                        <div className={styles.date}>{item.date}</div>
                    </div>
                    <div className={styles.result}>
                        <div
                            className={styles.erdogan}
                            style={{ width: `${item.erdogan}%` }}
                        >
                            {item.erdogan}%
                        </div>

                        <div
                            className={styles.kk}
                            style={{ width: `${item.kilicdaroglu}%` }}
                        >
                            {item.kilicdaroglu}%
                        </div>
                        <div
                            className={styles.ince}
                            style={{ width: `${item.ince}%` }}
                        >
                            {item.ince >= 3 ? `${item.ince}%` : ""}
                        </div>
                        <div
                            className={styles.other}
                            style={{ width: `${item.ogan}%` }}
                        >
                            {item.ogan >= 3 ? `${item.ogan}%` : ""}
                        </div>
                    </div>
                </div>
            ))}
            {!loading && (
                <>
                    <div className={styles.anket}>
                        <div className={styles.company}></div>

                        <div className={styles.result}>
                            <div
                                className={styles.erdogan}
                                style={{ width: "25%" }}
                            >
                                %
                            </div>
                            <div className={styles.kk} style={{ width: "25%" }}>
                                %
                            </div>
                            <div
                                className={styles.ince}
                                style={{ width: "25%" }}
                            >
                                %
                            </div>
                            <div
                                className={styles.other}
                                style={{ width: "25%" }}
                            >
                                %
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Page;
