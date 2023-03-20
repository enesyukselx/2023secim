import Image from "next/image";
import styles from "./page.module.scss";

import Link from "next/link";

async function fetchData() {
    const res = await fetch("http://localhost:3000/api/youtube");
    return res.json();
}

export default async function Page() {
    const data = await fetchData();

    function formatDate(date) {
        const date1 = new Date(date);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            return `${diffDays - 1} gün önce`;
        } else {
            return "Bugün";
        }
    }

    //data order by date
    data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <main className={styles.main}>
            {data.map((item) => (
                <Link href={item.url} target="_blank">
                    <div className={styles.youtube} key={Math.random()}>
                        <div className={styles.image}>
                            <Image
                                src={item.thumbnail}
                                width={200}
                                height={120}
                                alt={item.publisher}
                            />
                        </div>
                        <div className={styles.details}>
                            <h3>{item.title}</h3>
                            <p>{item.publisher}</p>
                            <p>{formatDate(item.date)}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </main>
    );
}
