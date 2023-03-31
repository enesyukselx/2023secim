import "../globals.scss";
import styles from "./layout.module.scss";
import Link from "next/link";
import CountDown from "@/components/MainPage/CountDown";
import Script from "next/script";

export const metadata = {
    title: "Cumhurbaşkanlığı Seçimleri 2023",
    description: "2023 Cumhurbaşkanlığı Seçimleri",
};

export default function RootLayout({ children }) {
    const analyticsUrl =
        "https://www.googletagmanager.com/gtag/js?id=G-" +
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

    return (
        <html lang="en">
            <head>
                <Script src={analyticsUrl} strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}');
                    `}
                </Script>
            </head>
            <body>
                <header>
                    <div className={styles.logo}>
                        <h1>SECIM2023</h1>
                        <CountDown />
                    </div>

                    <div className={styles.menu}>
                        <ul>
                            <li>
                                <Link href="/">Seçim 2023</Link>
                            </li>
                            <li>
                                <Link href="/anket">Anket Sonuçları</Link>
                            </li>
                            <li>
                                <Link href="/youtube">
                                    Youtube Sokak Röportajları
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>

                <div className={styles.content}>{children}</div>
            </body>
        </html>
    );
}
