"use client";
import { useState, useEffect } from "react";
import Cities2018 from "./Cities2018";
import Cities2023 from "./Cities2023";
import Tooltip from "./Tooltip";
import styles from "./Map.module.scss";
import useGetCityFrom2018 from "@/hooks/useGetCityFrom2018";

const Map = (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [city, setCity] = useState({});

    const [scrollY, setScrollY] = useState(0);

    const cityHandler = (name) => {
        const data = {
            name: name,
            candidates: [
                {
                    name: "RECEP TAYYİP ERDOĞAN",
                    percent: useGetCityFrom2018(
                        name,
                        "RECEP TAYYİP ERDOĞAN",
                        "yüzde"
                    ),
                },
                {
                    name: "MUHARREM İNCE",
                    percent: useGetCityFrom2018(name, "MUHARREM İNCE", "yüzde"),
                },
                {
                    name: "MERAL AKŞENER",
                    percent: useGetCityFrom2018(name, "MERAL AKŞENER", "yüzde"),
                },
                {
                    name: "SELAHATTİN DEMİRTAŞ",
                    percent: useGetCityFrom2018(
                        name,
                        "SELAHATTİN DEMİRTAŞ",
                        "yüzde"
                    ),
                },
                {
                    name: "TEMEL KARAMOLLAOĞLU",
                    percent: useGetCityFrom2018(
                        name,
                        "TEMEL KARAMOLLAOĞLU",
                        "yüzde"
                    ),
                },
                {
                    name: "DOĞU PERİNÇEK",
                    percent: useGetCityFrom2018(name, "DOĞU PERİNÇEK", "yüzde"),
                },
            ],
        };
        setCity(data);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScrollY(window.scrollY);
        }
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setScrollY(window.scrollY);
                setMousePosition({
                    x: mousePosition.x,
                    y: mousePosition.y + scrollY,
                });
                setCity({});
            });

            window.addEventListener("mousemove", (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY + scrollY,
                });
            });
        }
    }, [window.scrollY]);

    return (
        <>
            {city.name && props.year === "2018" && (
                <Tooltip
                    cityName={city.name}
                    data={city}
                    mousePosition={{
                        x: mousePosition.x - 140,
                        y: mousePosition.y + 20,
                    }}
                />
            )}
            <svg
                className={styles.map}
                baseProfile="tiny"
                fill="#7c7c7c"
                height="100%"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                version="1.2"
                viewBox="0 0 1000 424"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                onMouseOver={(e) => {
                    if (e.target.getAttribute("name")) {
                        cityHandler(e.target.getAttribute("name"));
                        setMousePosition({
                            x: e.clientX,
                            y: e.clientY,
                        });
                    }
                    if (e.target.getAttribute("id") === null) {
                        setCity({});
                    }
                }}
            >
                <g></g>

                {props.year === "2018" && <Cities2018 />}
                {props.year === "2023" && <Cities2023 />}

                <circle cx="401.7" cy="111.5" id="0"></circle>
                <circle cx="403.7" cy="112.1" id="1"></circle>
                <circle cx="280.5" cy="129.9" id="2"></circle>
            </svg>
        </>
    );
};

export default Map;
