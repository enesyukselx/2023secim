"use client";

import Button from "@/components/Button";
import styles from "./page.module.scss";
import InputText from "@/components/InputText";

const Page = () => {
    return (
        <div className={styles.content}>
            <h1>Anket Ekle</h1>
            <InputText type="text" placeholder="Anket Başlığı" />
            <InputText type="text" placeholder="Anket Tarih Aralığı" />
            <h2>Oy Yüzdelikleri</h2>
            <div className={styles.numberinputs}>
                <div>
                    <InputText
                        type="number"
                        placeholder="Recep Tayyip Erdoğan"
                        max="100"
                        min="0"
                    />
                </div>
                <div>
                    <InputText
                        type="number"
                        placeholder="Kemal Kılıçdaroğlu"
                        max="100"
                        min="0"
                    />
                </div>
                <div>
                    <InputText
                        type="number"
                        placeholder="Muharrem İnce"
                        max="100"
                        min="0"
                    />
                </div>
                <div>
                    <InputText
                        type="number"
                        placeholder="Diğer"
                        max="100"
                        min="0"
                    />
                </div>
            </div>
            <Button>Anketi Ekle</Button>
        </div>
    );
};

export default Page;
