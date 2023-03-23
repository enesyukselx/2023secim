"use client";

import "@/app/globals.scss";
import styles from "./layout.module.scss";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const { user } = useAuthContext();

    useEffect(() => {
        if (!user) {
            router.push("/admin/login");
        }
    }, []);

    const content = user ? (
        <div className={styles.content}>{children}</div>
    ) : (
        <></>
    );

    return <>{content}</>;
}
