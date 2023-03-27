"use client";
import { useEffect, useState } from "react";
import getAllDocuments from "@/firebase/firestore/getAllDatas";
import deleteData from "@/firebase/firestore/deleteData";
import { useRouter } from "next/navigation";
import Table from "@/components/Table";

const Page = () => {
    const [data, setData] = useState([]);
    const router = useRouter();

    const deleteHandler = async (id) => {
        const { error } = await deleteData("polls", id);
        if (error) {
            console.log(error);
            return;
        }

        firebaseData();
    };

    const editHandler = (id) => {
        router.push(`/admin/poll/edit/${id}`);
    };

    const firebaseData = async () => {
        const { result, error } = await getAllDocuments("polls");
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
        setData(data);
    };

    useEffect(() => {
        firebaseData();
    }, []);

    return (
        <div>
            <h1>Seçim Anketleri</h1>
            <Table
                columns={[
                    "Anket Başlığı",
                    "Anket Tarihi",
                    "Erdoğan",
                    "Kılıçdaroğlu",
                    "Düzenle",
                    "Sil",
                ]}
                data={data.map((item) => {
                    return [
                        { value: item.title },
                        { value: item.date },
                        { value: item.erdogan },
                        { value: item.kilicdaroglu },
                        {
                            value: (
                                <button onClick={() => editHandler(item.id)}>
                                    Düzenle
                                </button>
                            ),
                        },
                        {
                            value: (
                                <button onClick={() => deleteHandler(item.id)}>
                                    Sil
                                </button>
                            ),
                        },
                    ];
                })}
            />
        </div>
    );
};

export default Page;
