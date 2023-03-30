"use client";
import { useState } from "react";
import cities from "@/constants/mappaths.json";
import useGetCityFrom2018 from "@/hooks/useGetCityFrom2018";
import { Tooltip } from "@mui/material";
import styles from "./Tooltip.module.scss";

const Cities = () => {
    const [hoveredCity, setHoveredCity] = useState(null);

    return cities.map((city, index) => {
        const cityName = city.name;

        const getWinner = () => {
            const rte = useGetCityFrom2018(cityName, "RECEP TAYYİP ERDOĞAN");
            const mi = useGetCityFrom2018(cityName, "MUHARREM İNCE");
            const sd = useGetCityFrom2018(cityName, "SELAHATTİN DEMİRTAŞ");

            const winner = Math.max(rte, mi, sd);

            if (winner === rte) {
                if (hoveredCity === cityName) {
                    return "#d18400";
                }
                return "#ed9600";
            }
            if (winner === mi) {
                if (hoveredCity === cityName) {
                    return "#a80812";
                }
                return "#c80814";
            }
            if (winner === sd) {
                if (hoveredCity === cityName) {
                    return "#6b016b";
                }
                return "#8b008b";
            }
        };

        const candicates = [
            {
                name: "RECEP TAYYİP ERDOĞAN",
                percent: useGetCityFrom2018(
                    cityName,
                    "RECEP TAYYİP ERDOĞAN",
                    "yüzde"
                ),
            },
            {
                name: "MUHARREM İNCE",
                percent: useGetCityFrom2018(cityName, "MUHARREM İNCE", "yüzde"),
            },
            {
                name: "SELAHATTİN DEMİRTAŞ",
                percent: useGetCityFrom2018(
                    cityName,
                    "SELAHATTİN DEMİRTAŞ",
                    "yüzde"
                ),
            },
            {
                name: "TEMEL KARAMOLLAOĞLU",
                percent: useGetCityFrom2018(
                    cityName,
                    "TEMEL KARAMOLLAOĞLU",
                    "yüzde"
                ),
            },
            {
                name: "MERAL AKŞENER",
                percent: useGetCityFrom2018(cityName, "MERAL AKŞENER", "yüzde"),
            },
            {
                name: "DOĞU PERİNÇEK",
                percent: useGetCityFrom2018(cityName, "DOĞU PERİNÇEK", "yüzde"),
            },
        ].sort((a, b) => b.percent - a.percent);

        return (
            <Tooltip
                enterTouchDelay={0}
                leaveTouchDelay={10000}
                title={
                    <div className={styles.tooltip}>
                        <h3 className={styles.cityname}>{cityName}</h3>

                        {candicates.map((candicate, index) => (
                            <div key={index} className={styles.cand}>
                                <div className={styles.candicatename}>
                                    {candicate.name}
                                </div>
                                <div>{candicate.percent.toFixed(2)}%</div>
                            </div>
                        ))}
                    </div>
                }
            >
                <path
                    d={city.d}
                    id={city.id}
                    name={city.name}
                    key={index}
                    fill={getWinner()}
                    onMouseEnter={() => setHoveredCity(cityName)}
                    onMouseLeave={() => setHoveredCity(false)}
                ></path>
            </Tooltip>
        );
    });
};

export default Cities;
