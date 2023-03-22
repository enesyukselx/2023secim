import "@/app/globals.scss";
import styles from "./layout.module.scss";

export const metadata = {
    title: "Admin Panel - Login",
    description: "Admin Panel - Login",
};

export default function LoginLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>Admin Panel | Login</h1>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
