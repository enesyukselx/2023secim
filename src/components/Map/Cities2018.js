"use client";
import { useState } from "react";
import cities from "@/constants/mappaths.json";
import useGetCityFrom2018 from "@/hooks/useGetCityFrom2018";

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

        return (
            <path
                d={city.d}
                id={city.id}
                name={city.name}
                key={index}
                fill={getWinner()}
                onMouseEnter={() => setHoveredCity(cityName)}
                onMouseLeave={() => setHoveredCity(false)}
            ></path>
        );
    });
};

export default Cities;
