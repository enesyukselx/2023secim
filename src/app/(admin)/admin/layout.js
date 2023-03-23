"use client";

import "@/app/globals.scss";
import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Admin Panel</title>
            </head>
            <body>
                <AuthContextProvider>{children}</AuthContextProvider>
            </body>
        </html>
    );
}
