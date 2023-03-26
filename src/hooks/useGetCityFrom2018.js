"use client";

import data from "@/constants/2018cb.json";

const useGetCityFrom2018 = (cityName, candidate = null, type = null) => {
    const allData = data["jsonData"];

    if (candidate && type == "yüzde") {
        return allData?.[cityName.toUpperCase()]?.[
            candidate.toUpperCase() + " YUZDE"
        ];
    }
    if (candidate) {
        return allData?.[cityName.toUpperCase()]?.[candidate.toUpperCase()];
    }

    return allData?.[cityName.toUpperCase()];
};

export default useGetCityFrom2018;

// USAGE

// useGetCityFrom2018("İSTANBUL", "RECEP TAYYİP ERDOĞAN", "yüzde"); //YÜZDE
// useGetCityFrom2018("İSTANBUL", "RECEP TAYYİP ERDOĞAN"); // ALINAN OY MİKTARI
// useGetCityFrom2018("İSTANBUL"); // TÜM İSTANBUL VERİLERİ
// useGetCityFrom2018("TÜRKİYE"); // TÜRKİYE VERİLERİ
// useGetCityFrom2018("TÜRKİYE", "RECEP TAYYİP ERDOĞAN", "yüzde");
