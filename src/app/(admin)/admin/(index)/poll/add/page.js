"use client";

import { useRef, useState } from "react";
import addData from "@/firebase/firestore/addData";
import Button from "@/components/Button";
import styles from "./page.module.scss";
import InputText from "@/components/InputText";
import Alert from "@/components/Alert";

const Page = () => {
    const titleRef = useRef();
    const dateRef = useRef();
    const erdoganRef = useRef();
    const kilicdarogluRef = useRef();
    const inceRef = useRef();
    const oganRef = useRef();

    const [error, setError] = useState({ status: false, message: "" });

    const addPollHandler = async () => {
        if (
            !titleRef.current.value ||
            !dateRef.current.value ||
            !erdoganRef.current.value ||
            !kilicdarogluRef.current.value ||
            !inceRef.current.value ||
            !oganRef.current.value
        ) {
            setError({
                status: true,
                message: "Lütfen tüm alanları doğru bir şekilde doldurun.",
            });
            return;
        }

        const total =
            parseFloat(erdoganRef.current.value) +
            parseFloat(kilicdarogluRef.current.value) +
            parseFloat(inceRef.current.value) +
            parseFloat(oganRef.current.value);

        if (Math.round(total) !== 100) {
            setError({
                status: true,
                message: "Oranların hepsinin toplamı 100 olmalıdır.",
            });
            return;
        }

        const { result, error } = await addData(
            "polls",
            Math.random().toString(36).substr(2, 9),
            {
                title: titleRef.current.value,
                date: dateRef.current.value,
                erdogan: erdoganRef.current.value,
                kilicdaroglu: kilicdarogluRef.current.value,
                ince: inceRef.current.value,
                ogan: oganRef.current.value,
                publicDate: new Date().getTime(),
            }
        );

        if (error) {
            setError({
                status: true,
                message: "Veritabanına bağlanırken bir hata oluştu.",
            });
            return;
        } else {
            alert("Anket başarıyla eklendi.");
            titleRef.current.value = "";
            dateRef.current.value = "";
            erdoganRef.current.value = "";
            kilicdarogluRef.current.value = "";
            inceRef.current.value = "";
            oganRef.current.value = "";
            setError({ status: false, message: "" });
        }
    };

    return (
        <div className={styles.content}>
            <h1>Anket Ekle</h1>
            {error.status && <Alert type="error">{error.message}</Alert>}
            <InputText type="text" placeholder="Anket Şirketi" ref={titleRef} />
            <InputText
                type="text"
                placeholder="Anket Tarih Aralığı"
                ref={dateRef}
            />
            <h2>Oy Yüzdelikleri</h2>
            <div className={styles.numberinputs}>
                <div>
                    <InputText
                        type="text"
                        placeholder="Recep Tayyip Erdoğan"
                        max="100"
                        min="0"
                        ref={erdoganRef}
                    />
                </div>
                <div>
                    <InputText
                        type="text"
                        placeholder="Kemal Kılıçdaroğlu"
                        max="100"
                        min="0"
                        ref={kilicdarogluRef}
                    />
                </div>
                <div>
                    <InputText
                        type="text"
                        placeholder="Muharrem İnce"
                        max="100"
                        min="0"
                        ref={inceRef}
                    />
                </div>
                <div>
                    <InputText
                        type="text"
                        placeholder="Sinan Oğan"
                        max="100"
                        min="0"
                        ref={oganRef}
                    />
                </div>
            </div>
            <Button onClick={addPollHandler}>Anketi Ekle</Button>
        </div>
    );
};

export default Page;
