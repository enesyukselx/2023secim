"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Link from "next/navigation";
import getAllDocuments from "@/firebase/firestore/getAllDatas";
import deleteData from "@/firebase/firestore/deleteData";
import { useRouter } from "next/navigation";

const Page = () => {
    const [data, setData] = useState([]);

    const deleteHandler = async (id) => {
        const { error } = await deleteData("youtube", id);
        if (error) {
            console.log(error);
            return;
        }

        firebaseData();
    };

    const firebaseData = async () => {
        const { result, error } = await getAllDocuments("youtube");
        if (error) {
            console.log(error);
            return;
        }

        const data = [];
        result.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setData(data);
    };

    useEffect(() => {
        firebaseData();
    }, []);

    const router = useRouter();

    return (
        <div>
            <h1>Videolar</h1>
            <div className={styles.videos}>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <div>
                                {item.title} - {item.channel}
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        deleteHandler(item.id);
                                    }}
                                >
                                    Videoyu kaldır
                                </button>
                                &nbsp; &nbsp; &nbsp;
                                <button
                                    onClick={() => {
                                        router.push(
                                            `/admin/youtube/edit/${item.id}`
                                        );
                                    }}
                                >
                                    Videoyu Düzenle
                                </button>
                                &nbsp; &nbsp; &nbsp;
                                {item.date}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Page;
