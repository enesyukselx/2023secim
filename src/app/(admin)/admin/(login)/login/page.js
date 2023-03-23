"use client";

import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";

import styles from "./page.module.scss";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            router.push("/admin");
        }
    }, [user]);

    const clickHandle = async () => {
        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error);
        }

        return router.push("/admin");
    };

    return user ? (
        <></>
    ) : (
        <div className={styles.content}>
            <InputText
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Kullanıcı Adı"
            />
            <InputText
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <Button onClick={clickHandle}>Giriş Yap</Button>
        </div>
    );
};

export default Page;
