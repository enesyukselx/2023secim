"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import useGetCityFrom2018 from "@/hooks/useGetCityFrom2018";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <main className={styles.main}></main>;
}
