const data = [
    {
        id: Math.random(),
        date: "2023-03-19",
        company: "Lorem Araştırma",
        result: { erdogan: 32, kk: 33, ince: 30, other: 5 },
    },
];

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
