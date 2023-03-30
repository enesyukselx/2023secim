"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import getAllDocuments from "@/firebase/firestore/getAllDatas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Page = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(10);
    const [loading, setLoading] = useState(false);

    const [results, setResults] = useState([]);
    const items = [];

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
        data.map((item) => {
            items.push([
                {
                    name: "Recep Tayyip Erdoğan",
                    value: item.erdogan,
                    img: "/rte.jpg",
                    color: "#ed9600",
                },
                {
                    name: "Kemal Kılıçdaroğlu",
                    value: item.kilicdaroglu,
                    img: "/kk.jpg",
                    color: "#1C8DE4",
                },
                {
                    name: "Muharrem İnce",
                    value: item.ince,
                    img: "/mi.jpg",
                    color: "#c80814",
                },
                {
                    name: "Sinan Oğan",
                    value: item.ogan,
                    img: "/so.webp",
                    color: "rgb(0, 128, 0)",
                },
            ]);

            setResults(items);
        });

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
            {data.slice(0, startIndex).map((item, index) => (
                <div className={styles.poll} key={Math.random()}>
                    <div className={styles.company}>
                        <div className={styles.name}>{item.title}</div>
                        <div className={styles.date}>{item.date}</div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={styles.swiper}
                        id="pollswiper"
                        key="pollswiper"
                    >
                        {results[index]
                            .sort((a, b) => b.value - a.value)
                            .map((item, index) => (
                                <SwiperSlide
                                    className={styles.slide}
                                    key={index}
                                >
                                    <div className={styles.image}>
                                        <Image
                                            src={item.img}
                                            width={90}
                                            height={90}
                                            alt={item.name}
                                        />
                                        <span>%{item.value}</span>
                                    </div>
                                    <div className={styles.percent}>
                                        <span
                                            style={{
                                                width: `${item.value}%`,
                                                background: item.color,
                                            }}
                                        ></span>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default Page;
