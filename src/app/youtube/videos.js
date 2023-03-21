"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./videos.module.scss";

const Videos = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(20);

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/api/youtube");
        const data = await res.json();
        setData(data);
    };

    const loadHandle = () => {
        if (startIndex < data.length) {
            setStartIndex(startIndex + 10);
        }
    };

    useEffect(() => {
        fetchData();
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

    window.onscroll = function (ev) {
        if (
            window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight
        ) {
            loadHandle();
        }
    };

    return (
        <div className={styles.main}>
            {data.slice(0, startIndex).map((item) => (
                <Link href={item.url} target="_blank" key={item.id}>
                    <div className={styles.youtube}>
                        <div className={styles.image}>
                            <Image
                                src={item.thumbnail}
                                width={200}
                                height={120}
                                alt={item.publisher}
                            />
                        </div>
                        <div className={styles.details}>
                            <h3>{item.title}</h3>
                            <div>
                                <p className={styles.publisher}>
                                    {item.publisher}
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
