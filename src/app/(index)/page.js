"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Map from "@/components/Map/Map";
import Candicates from "@/components/MainPage/Candicates";
import { useState } from "react";
import CitySwiper from "@/components/MainPage/CitySwiper";

export default function Home() {
    const [year, setYear] = useState("2018");

    const yearHandler = (year) => {
        setYear(year);
    };

    return (
        <main className={styles.main}>
            <div className={styles.year}>
                <div>
                    <button
                        className={year === "2018" ? styles.selected : ""}
                        onClick={() => {
                            yearHandler("2018");
                        }}
                    >
                        <Image
                            src="/president-icon.png"
                            alt="icon"
                            height="32"
                            width="32"
                        />
                        <span>2018 Cumhurbaşkanlığı Seçimi</span>
                    </button>
                </div>
                <div>
                    <button
                        className={year === "2023" ? styles.selected : ""}
                        onClick={() => {
                            yearHandler("2023");
                        }}
                    >
                        <Image
                            src="/president-icon.png"
                            alt="icon"
                            height="32"
                            width="32"
                        />
                        <span>2023 Cumhurbaşkanlığı Seçimi</span>
                    </button>
                </div>
            </div>
            <div className={styles.candicates}>
                <Candicates year={year} />
            </div>
            <div className={styles.map}>
                <Map year={year} />
            </div>
            <div>{year === "2018" && <CitySwiper />}</div>
        </main>
    );
}
