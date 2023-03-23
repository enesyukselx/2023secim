"use client";

import "@/app/globals.scss";
import styles from "./layout.module.scss";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import logOut from "@/firebase/auth/logout";

export default function AdminLayout({ children }) {
    const router = useRouter();
    const { user } = useAuthContext();

    useEffect(() => {
        if (!user) {
            router.push("/admin/login");
        }
    }, []);

    const logoutHandle = async () => {
        const { result, error } = await logOut();

        if (error) {
            return console.log(error);
        }

        return router.push("/admin/login");
    };

    const content = user && (
        <div className={styles.content}>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <Link href="/admin">Anasayfa</Link>
                    </li>
                    <li>
                        <Link href="/admin/youtube">Youtube Videoları</Link>
                    </li>
                    <li>
                        <Link href="/admin/anket">Seçim Anketleri</Link>
                    </li>
                    <li>
                        <button href="/admin" onClick={logoutHandle}>
                            Çıkış Yap
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.main}>{children}</div>
        </div>
    );

    return <>{content}</>;
}
