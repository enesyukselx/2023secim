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
            {data.slice(0, startIndex).map((item) => (
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
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.image}>
                                <Image
                                    src="/rte.jpg"
                                    width={90}
                                    height={90}
                                    alt="Recep Tayyip Erdoğan"
                                />
                                <span>%{item.erdogan}</span>
                            </div>
                            <div className={styles.percent}>
                                <span
                                    style={{
                                        width: `${item.erdogan}%`,
                                        background: "#ed9600",
                                    }}
                                ></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.image}>
                                <Image
                                    src="/kk.jpg"
                                    width={90}
                                    height={90}
                                    alt="Kemal Kılıçdaroğlu"
                                />
                                <span>%{item.kilicdaroglu}</span>
                            </div>
                            <div className={styles.percent}>
                                <span
                                    style={{
                                        width: `${item.kilicdaroglu}%`,
                                        background: "#1C8DE4",
                                    }}
                                ></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.image}>
                                <Image
                                    src="/mi.jpg"
                                    width={90}
                                    height={90}
                                    alt="Muharrem İnce"
                                />
                                <span>%{item.ince}</span>
                            </div>
                            <div className={styles.percent}>
                                <span
                                    style={{
                                        width: `${parseFloat(item.ince)}%`,
                                        background: "#c80814",
                                    }}
                                ></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.image}>
                                <Image
                                    src="/so.webp"
                                    width={90}
                                    height={90}
                                    alt="Sinan Oğan"
                                />
                                <span>%{item.ogan}</span>
                            </div>
                            <div className={styles.percent}>
                                <span
                                    style={{
                                        width: `${parseFloat(item.ogan)}%`,
                                        background: "rgb(0, 128, 0)",
                                    }}
                                ></span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default Page;
