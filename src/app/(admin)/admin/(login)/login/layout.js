"use client";

import "@/app/globals.scss";
import styles from "./layout.module.scss";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";

export default function LoginLayout({ children }) {
    const router = useRouter();
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            router.push("/admin");
        }
    }, []);

    const content = !user ? (
        <div className={styles.content}>
            <div className={styles.header}>
                <h1>Admin Panel</h1>
            </div>
            {children}
        </div>
    ) : (
        <></>
    );

    return <>{content}</>;
}
