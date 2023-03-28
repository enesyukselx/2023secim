"use client";
import { useState } from "react";
import cities from "@/constants/mappaths.json";

const Cities = () => {
    return cities.map((city, index) => {
        return (
            <path
                d={city.d}
                id={city.id}
                name={city.name}
                key={index}
                fill="gray"
                onMouseEnter={(e) => {
                    e.target.style.fill = "darkgray";
                }}
                onMouseLeave={(e) => {
                    e.target.style.fill = "gray";
                }}
            ></path>
        );
    });
};

export default Cities;
