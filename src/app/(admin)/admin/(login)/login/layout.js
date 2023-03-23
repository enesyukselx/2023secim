"use client";

import "@/app/globals.scss";
import styles from "./layout.module.scss";
import { AuthContextProvider } from "@/context/AuthContext";

export default function LoginLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Admin Panel | Login</title>
            </head>
            <body>
                <div className={styles.content}>
                    <AuthContextProvider>
                        <div className={styles.header}>
                            <h1>Admin Panel | Login</h1>
                        </div>
                        {children}
                    </AuthContextProvider>
                </div>
            </body>
        </html>
    );
}
