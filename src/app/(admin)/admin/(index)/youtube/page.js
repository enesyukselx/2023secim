"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import getAllDocuments from "@/firebase/firestore/getAllDatas";
import deleteData from "@/firebase/firestore/deleteData";
import { useRouter } from "next/navigation";
import InputText from "@/components/InputText";
import Table from "@/components/Table";

const Page = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const router = useRouter();

    const deleteHandler = async (id) => {
        const { error } = await deleteData("youtube", id);
        if (error) {
            console.log(error);
            return;
        }

        firebaseData();
    };

    const editHandler = (id) => {
        router.push(`/admin/youtube/edit/${id}`);
    };

    const firebaseData = async () => {
        const { result, error } = await getAllDocuments("youtube");
        if (error) {
            console.log(error);
            return;
        }

        const data = [];
        result.forEach((doc) => {
            data.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        data.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setData(data);
    };

    useEffect(() => {
        firebaseData();
    }, []);

    return (
        <div>
            <h1>Videolar</h1>
            <div className={styles.videos}>
                <div className={styles.search}>
                    <InputText
                        type="text"
                        placeholder="Ara (Kanal ismine göre)"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
                <Table
                    columns={[
                        "Video Adı",
                        "Kanal Adı",
                        "Tarih",
                        "Düzenle",
                        "Sil",
                    ]}
                    data={data
                        .filter((item) => {
                            return item.channel
                                .toLowerCase()
                                .includes(search.toLowerCase());
                        })
                        .map((item) => {
                            return [
                                { value: item.title },
                                { value: item.channel },
                                { value: item.date },
                                {
                                    value: (
                                        <button
                                            onClick={() => {
                                                editHandler(item.id);
                                            }}
                                        >
                                            Düzenle
                                        </button>
                                    ),
                                },
                                {
                                    value: (
                                        <button
                                            onClick={() => {
                                                deleteHandler(item.id);
                                            }}
                                        >
                                            Sil
                                        </button>
                                    ),
                                },
                            ];
                        })}
                />
            </div>
        </div>
    );
};

export default Page;
