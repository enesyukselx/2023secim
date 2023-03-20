const data = [
    {
        id: "1",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 6. Bölüm: Kocaeli",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=rKObNVfSTSU&ab_channel=HalkEkran%C4%B1",
        thumbnail:
            "https://i.ytimg.com/an_webp/rKObNVfSTSU/mqdefault_6s.webp?du=3000&sqp=CIjJ3qAG&rs=AOn4CLBR0W5ZsbFmKazVN4B_GEmU7hmdkQ",
        date: "2023-03-19",
    },
    {
        id: "2",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 5. Bölüm: Bursa",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=SZVcsZoVhN4&t=702s",
        thumbnail:
            "https://i.ytimg.com/an_webp/SZVcsZoVhN4/mqdefault_6s.webp?du=3000&sqp=CKLa4aAG&rs=AOn4CLCJcU26oeNrgNXiutC6XXTHJFTlAQ",
        date: "2023-03-18",
    },
    {
        id: "3",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 4. Bölüm: Eskişehir",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=sSRQVTMtTVU&t=15s",
        thumbnail:
            "https://i.ytimg.com/an_webp/sSRQVTMtTVU/mqdefault_6s.webp?du=3000&sqp=CLK64aAG&rs=AOn4CLCCm_zT4Ga58Fc9KiU4f3-WUG70pw",
        date: "2023-03-17",
    },
    {
        id: "4",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 3. Bölüm: Sakarya",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=evNccIYPz4M&t=68s",
        thumbnail:
            "https://i.ytimg.com/an_webp/evNccIYPz4M/mqdefault_6s.webp?du=3000&sqp=CLrO4aAG&rs=AOn4CLBSCTxbnQPms0nMCvnzYxLNwEwkmQ",
        date: "2023-03-16",
    },
    {
        id: "5",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 2. Bölüm: Sincan",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=ev-8b9qSRQo&t=69s",
        thumbnail:
            "https://i.ytimg.com/an_webp/ev-8b9qSRQo/mqdefault_6s.webp?du=3000&sqp=CMy94aAG&rs=AOn4CLCnhMgee5975QfjEOxedt_HsOAe3A",
        date: "2023-03-15",
    },
    {
        id: "6",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 1. Bölüm: Kırıkkale",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=_N4JQTDIttg",
        thumbnail:
            "https://i.ytimg.com/an_webp/_N4JQTDIttg/mqdefault_6s.webp?du=3000&sqp=COi-4aAG&rs=AOn4CLDBhQn2qYRcz2p-cP7zZfhCDCXhJw",
        date: "2023-03-14",
    },
];

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
