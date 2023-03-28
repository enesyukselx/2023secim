import useGetCityFrom2018 from "@/hooks/useGetCityFrom2018";

const candicates2018 = [
    {
        id: 1,
        name: "Recep Tayyip",
        lastname: "Erdoğan",
        percent: useGetCityFrom2018(
            "TÜRKİYE",
            "RECEP TAYYİP ERDOĞAN",
            "yüzde"
        ).toFixed(2),
        color: "#ed9600",
        imageUrl: "/rte18.png",
    },
    {
        id: 2,
        name: "Muharrem",
        lastname: "İnce",
        percent: useGetCityFrom2018(
            "TÜRKİYE",
            "MUHARREM İNCE",
            "yüzde"
        ).toFixed(2),
        color: "#c80814",
        imageUrl: "/mi18.png",
    },
    {
        id: 3,
        name: "Selahattin",
        lastname: "Demirtaş",
        percent: useGetCityFrom2018(
            "TÜRKİYE",
            "SELAHATTİN DEMİRTAŞ",
            "yüzde"
        ).toFixed(2),
        color: "#8b008b",
        imageUrl: "/sd18.png",
    },
    {
        id: 4,
        name: "Meral",
        lastname: "Akşener",
        percent: useGetCityFrom2018(
            "TÜRKİYE",
            "MERAL AKŞENER",
            "yüzde"
        ).toFixed(2),
        color: "#1C8DE4",
        imageUrl: "/ma18.png",
    },
    {
        id: 5,
        name: "Temel",
        lastname: "Karamollaoğlu",
        percent: useGetCityFrom2018(
            "TÜRKİYE",
            "TEMEL KARAMOLLAOĞLU",
            "yüzde"
        ).toFixed(2),
        color: "rgb(0, 128, 0)",
        imageUrl: "/tk18.png",
    },
    {
        id: 6,
        name: "Doğu",
        lastname: "Perinçek",
        percent: useGetCityFrom2018(
            "TÜRKİYE",
            "DOĞU PERİNÇEK",
            "yüzde"
        ).toFixed(2),
        color: "rgb(0, 128, 0)",
        imageUrl: "/dp18.png",
    },
];

export default candicates2018;
