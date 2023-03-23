"use client";
import { useRef, useState } from "react";
import styles from "./page.module.scss";
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import Alert from "@/components/Alert";

import addData from "@/firebase/firestore/addData";

const Page = () => {
    const idRef = useRef();
    const titleRef = useRef();
    const channelRef = useRef();
    const imageRef = useRef();
    const dateRef = useRef();
    const urlRef = useRef();

    const [error, setError] = useState(false);

    const fetchHandler = async () => {
        if (!idRef.current.value) return;

        const response = await fetch(
            `http://localhost:3000/api/fetch?id=${idRef.current.value}`
        );

        if (!response.ok) {
            setError(true);
            return;
        }

        setError(false);

        const data = await response.json();

        titleRef.current.value = data.data.title;
        channelRef.current.value = data.data.author;
        imageRef.current.value = data.data.thumbnail;
        dateRef.current.value = data.data.date;
        urlRef.current.value = data.data.videoUrl;
    };

    const addVideoHandler = async () => {
        if (
            !titleRef.current.value ||
            !channelRef.current.value ||
            !imageRef.current.value ||
            !dateRef.current.value ||
            !urlRef.current.value
        )
            return;

        const { result, error } = await addData(
            "youtube",
            idRef.current.value,
            {
                title: titleRef.current.value,
                channel: channelRef.current.value,
                image: imageRef.current.value,
                date: dateRef.current.value,
                url: urlRef.current.value,
            }
        );

        if (error) {
            return console.log(error);
        } else {
            alert("Video başarıyla eklendi!");
            titleRef.current.value = "";
            channelRef.current.value = "";
            imageRef.current.value = "";
            dateRef.current.value = "";
            urlRef.current.value = "";
            idRef.current.value = "";
        }
    };

    return (
        <div className={styles.content}>
            <h1>Video ekle</h1>
            {error && <Alert>Video bilgisi çekilemedi!</Alert>}
            <InputText type="text" placeholder="Video ID" ref={idRef} />
            <Button onClick={fetchHandler}>Video bilgilerini çek</Button>

            <div className={styles.videoDetails}>
                <InputText
                    type="text"
                    placeholder="Video başlığı"
                    ref={titleRef}
                />
                <InputText
                    type="text"
                    placeholder="Yayınlayan kanal"
                    ref={channelRef}
                />
                <InputText
                    type="text"
                    placeholder="Video resmi"
                    ref={imageRef}
                />
                <InputText
                    type="text"
                    placeholder="Paylaşım tarihi (Format: YYYY-AA-GG)"
                    ref={dateRef}
                />
                <InputText type="text" placeholder="URL" ref={urlRef} />

                <Button onClick={addVideoHandler}>Videoyu ekle</Button>
            </div>
        </div>
    );
};

export default Page;
