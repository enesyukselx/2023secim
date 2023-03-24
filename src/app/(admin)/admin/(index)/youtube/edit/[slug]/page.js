"use client";
import { useRef, useEffect } from "react";
import styles from "./page.module.scss";
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

import getDocument from "@/firebase/firestore/getData";
import addData from "@/firebase/firestore/addData";

const Page = ({ params }) => {
    const titleRef = useRef();
    const channelRef = useRef();
    const imageRef = useRef();
    const dateRef = useRef();
    const urlRef = useRef();

    const router = useRouter();

    const getVideo = async () => {
        const { result, error } = await getDocument("youtube", params.slug);
        if (error) {
            setError(true);
            return console.log(error);
        }

        titleRef.current.value = result.data().title;
        channelRef.current.value = result.data().channel;
        imageRef.current.value = result.data().image;
        dateRef.current.value = result.data().date;
        urlRef.current.value = result.data().url;
    };

    useEffect(() => {
        getVideo();
    }, []);

    const editVideoHandler = async () => {
        if (
            !titleRef.current.value ||
            !channelRef.current.value ||
            !imageRef.current.value ||
            !dateRef.current.value ||
            !urlRef.current.value
        )
            return;

        const { result, error } = await addData("youtube", params.slug, {
            title: titleRef.current.value,
            channel: channelRef.current.value,
            image: imageRef.current.value,
            date: dateRef.current.value,
            url: urlRef.current.value,
        });

        if (error) {
            return console.log(error);
        } else {
            alert("Video başarıyla düzenlendi!");
            titleRef.current.value = "";
            channelRef.current.value = "";
            imageRef.current.value = "";
            dateRef.current.value = "";
            urlRef.current.value = "";
            router.push("/admin/youtube");
        }
    };

    return (
        <div className={styles.content}>
            <h1>Video Düzenle</h1>
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

                <Button onClick={editVideoHandler}>Videoyu düzenle</Button>
            </div>
        </div>
    );
};

export default Page;
