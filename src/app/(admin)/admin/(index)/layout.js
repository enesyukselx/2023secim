"use client";

import "@/app/globals.scss";
import styles from "./layout.module.scss";
import { AuthContextProvider } from "@/context/AuthContext";

import Link from "next/link";

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <div className={styles.logo}>
                        <h1>SECIM2023</h1>
                    </div>
                </header>

                <div className={styles.content}>
                    <AuthContextProvider>{children}</AuthContextProvider>
                </div>
            </body>
        </html>
    );
}
