"use client";
import { useState, useEffect } from "react";

const CountDown = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const difference = +new Date("2023-05-14") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountdown(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div
            className="countdown"
            style={{
                fontSize: "1.2rem",
                marginTop: "0.8rem",
            }}
        >
            Seçime&nbsp;
            {Object.keys(countdown).map((interval, index) => {
                const value = countdown[interval];
                return (
                    <span key={index}>
                        <span className="value">{value}</span>
                        <span className="interval">
                            {interval === "days"
                                ? " Gün "
                                : interval === "hours"
                                ? " Saat "
                                : interval === "minutes"
                                ? " Dakika "
                                : interval === "seconds"
                                ? " Saniye "
                                : ""}
                        </span>
                    </span>
                );
            })}
            kaldı!
        </div>
    );
};

export default CountDown;
