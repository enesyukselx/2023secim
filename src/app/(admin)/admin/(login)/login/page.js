"use client";
import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

import styles from "./page.module.scss";
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import Alert from "@/components/Alert";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();
    const { user } = useAuthContext();

    const clickHandle = async () => {
        const { result, error } = await signIn(email, password);

        if (error) {
            setError(error);
            return;
        }

        return router.push("/admin");
    };

    return user ? (
        <></>
    ) : (
        <div className={styles.content}>
            {error && <Alert>Email veya Şifre Yanlış</Alert>}

            <InputText
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <InputText
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Şifre"
            />
            <Button onClick={clickHandle}>Giriş Yap</Button>
        </div>
    );
};

export default Page;
