"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./videos.module.scss";

import getAllDocuments from "@/firebase/firestore/getAllDatas";

const Videos = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(20);

    const firebaseData = async () => {
        const { result, error } = await getAllDocuments("youtube");
        if (error) {
            console.log(error);
            return;
        }

        const data = [];
        result.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });

        setData(data);
    };

    const loadHandle = () => {
        if (startIndex < data.length) {
            setStartIndex(startIndex + 10);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 100
            ) {
                loadHandle();
            }
        });
        firebaseData();
    }, []);

    data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    function formatDate(date) {
        const date1 = new Date(date);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            return `${diffDays - 1} gün önce`;
        } else {
            return "Bugün";
        }
    }

    return (
        <div className={styles.main}>
            {data.slice(0, startIndex).map((item) => (
                <Link href={item.url} target="_blank" key={item.id}>
                    <div className={styles.youtube}>
                        <div className={styles.image}>
                            <Image
                                src={item.image}
                                width={200}
                                height={120}
                                alt={item.channel}
                            />
                        </div>
                        <div className={styles.details}>
                            <h3>{item.title}</h3>
                            <div>
                                <p className={styles.publisher}>
                                    {item.channel}
                                </p>
                                <p className={styles.date}>
                                    {formatDate(item.date)}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Videos;
