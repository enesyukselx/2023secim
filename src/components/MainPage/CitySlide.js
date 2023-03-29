import styles from "./CitySlide.module.scss";
import Image from "next/image";
import useGetCityFrom2018 from "@/hooks/useGetCityFrom2018";
import candicates2018 from "@/constants/candicates18";

const CitySlide = (props) => {
    const candicates = candicates2018
        .map((candicate) => {
            return {
                name: candicate.name,
                lastname: candicate.lastname,
                imageUrl: candicate.imageUrl,
                color: candicate.color,
                percent: useGetCityFrom2018(
                    props.city,
                    candicate.name + " " + candicate.lastname,
                    "yüzde"
                ).toFixed(2),
            };
        })
        .sort((a, b) => {
            return b.percent - a.percent;
        });

    return (
        <div className={styles.slide}>
            <div className={styles.text}>
                <h1>{props.city}</h1>
            </div>
            <div className={styles.results}>
                {candicates.map((candicate) => {
                    return (
                        <div className={styles.result} key={Math.random()}>
                            <div className={styles.candicate}>
                                <Image
                                    height={80}
                                    width={80}
                                    src={candicate.imageUrl}
                                    alt={candicate.name}
                                />
                            </div>
                            <div className={styles.percent}>
                                <span>
                                    {useGetCityFrom2018(
                                        props.city,
                                        candicate.name +
                                            " " +
                                            candicate.lastname,
                                        "yüzde"
                                    ).toFixed(2)}
                                    %
                                </span>
                            </div>
                            <div className={styles.bar}>
                                <span
                                    style={{
                                        background: candicate.color,
                                        fontWeight: "bold",
                                        height: "100%",
                                        width:
                                            parseFloat(
                                                useGetCityFrom2018(
                                                    props.city,
                                                    candicate.name +
                                                        " " +
                                                        candicate.lastname,
                                                    "yüzde"
                                                ).toFixed(2)
                                            ) + "%",
                                    }}
                                ></span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CitySlide;
