const data = [
    {
        id: Math.random(),
        date: "2023-03-19",
        company: "Lorem Araştırma",
        result: { erdogan: 32, kk: 33, ince: 30, other: 5 },
    },
    {
        id: Math.random(),
        company: "John Anket",
        date: "2023-03-21",
        result: {
            erdogan: 45,
            kk: 39,
            ince: 15,
            other: 1,
        },
    },
    {
        id: Math.random(),
        company: "Jane Doe",
        date: "2023-03-11",
        result: {
            erdogan: 25,
            kk: 22,
            ince: 60,
            other: 3,
        },
    },
    {
        id: Math.random(),
        company: "Jane Doe",
        date: "2023-02-09",

        result: {
            erdogan: 20,
            kk: 60,
            ince: 17,
            other: 3,
        },
    },
    {
        id: Math.random(),
        company: "QPR",
        date: "2022-12-31",
        result: {
            erdogan: 37,
            kk: 53,
            ince: 7,
            other: 3,
        },
    },
];

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
