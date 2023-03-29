"use client";
import Candicate from "./Candicate";
import styles from "./Candicates.module.scss";
import candicates2018 from "@/constants/candicates18";
import candicates2023 from "@/constants/candicates23";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Candicates = (props) => {
    let candicates = props.year === "2018" ? candicates2018 : candicates2023;

    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className={styles.candicates}
                key={props.year}
            >
                {candicates.map((candicate) => {
                    return (
                        <SwiperSlide
                            key={candicate.id}
                            className={styles.swiperslide}
                        >
                            <Candicate
                                key={candicate.id}
                                imageUrl={candicate.imageUrl}
                                firstName={candicate.name}
                                lastName={candicate.lastname}
                                percent={candicate.percent}
                                color={candicate.color}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default Candicates;
