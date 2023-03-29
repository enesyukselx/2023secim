import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import styles from "./CitySwiper.module.scss";
import CitySlide from "./CitySlide";

const CitySwiper = (props) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
        >
            <SwiperSlide>
                <CitySlide city="İSTANBUL" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="ANKARA" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="İZMİR" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="ANTALYA" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="ADANA" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="BURSA" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="KONYA" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="ŞANLIURFA" year={props.year} />
            </SwiperSlide>
            <SwiperSlide>
                <CitySlide city="GAZİANTEP" year={props.year} />
            </SwiperSlide>
        </Swiper>
    );
};

export default CitySwiper;
