const data = [
    {
        id: "1",
        title: "2023 Cumhurbaşkanlığı Seçim Anketi | 6. Bölüm: Kocaeli",
        publisher: "Halk Ekranı",
        url: "https://www.youtube.com/watch?v=rKObNVfSTSU&ab_channel=HalkEkran%C4%B1",
        thumbnail:
            "https://i.ytimg.com/vi/q_XvzF2kxuE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCFRtN6VguGPLXbrUlE6g_TFvxZMQ",
        date: "2023-03-21",
    },
];

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
