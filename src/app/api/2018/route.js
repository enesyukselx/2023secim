const { NextResponse } = require("next/server");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

export async function GET(request) {
    const SEHIRLER = [
        "ADANA",
        "ADIYAMAN",
        "AFYONKARAHİSAR",
        "AĞRI",
        "AKSARAY",
        "AMASYA",
        "ANKARA",
        "ANTALYA",
        "ARDAHAN",
        "ARTVİN",
        "AYDIN",
        "BALIKESİR",
        "BARTIN",
        "BATMAN",
        "BAYBURT",
        "BİLECİK",
        "BİNGÖL",
        "BİTLİS",
        "BOLU",
        "BURDUR",
        "BURSA",
        "ÇANAKKALE",
        "ÇANKIRI",
        "ÇORUM",
        "DENİZLİ",
        "DİYARBAKIR",
        "DÜZCE",
        "EDİRNE",
        "ELAZIĞ",
        "ERZİNCAN",
        "ERZURUM",
        "ESKİŞEHİR",
        "GAZİANTEP",
        "GİRESUN",
        "GÜMÜŞHANE",
        "HAKKARİ",
        "HATAY",
        "IĞDIR",
        "ISPARTA",
        "İSTANBUL",
        "İZMİR",
        "KAHRAMANMARAŞ",
        "KARABÜK",
        "KARAMAN",
        "KARS",
        "KASTAMONU",
        "KAYSERİ",
        "KIRIKKALE",
        "KIRKLARELİ",
        "KIRŞEHİR",
        "KİLİS",
        "KOCAELİ",
        "KONYA",
        "KÜTAHYA",
        "MALATYA",
        "MANİSA",
        "MARDİN",
        "MERSİN",
        "MUĞLA",
        "MUŞ",
        "NEVŞEHİR",
        "NİĞDE",
        "ORDU",
        "OSMANİYE",
        "RİZE",
        "SAKARYA",
        "SAMSUN",
        "SİİRT",
        "SİNOP",
        "SİVAS",
        "ŞANLIURFA",
        "ŞIRNAK",
        "TEKİRDAĞ",
        "TOKAT",
        "TRABZON",
        "TUNCELİ",
        "UŞAK",
        "VAN",
        "YALOVA",
        "YOZGAT",
        "ZONGULDAK",
    ];
    const ADAYLAR = [
        "RECEP TAYYİP ERDOĞAN",
        "MUHARREM İNCE",
        "MERAL AKŞENER",
        "SELAHATTİN DEMİRTAŞ",
        "TEMEL KARAMOLLAOĞLU",
        "DOĞU PERİNÇEK",
    ];
    const calculatePercentage = (sayi, allCount) => {
        return (sayi / allCount) * 100;
    };
    const results = [];

    let jsonData = {};

    try {
        const stream = fs.createReadStream(
            path.join(process.cwd(), "src", "csv", "data2018cb.csv")
        );
        await new Promise((resolve, reject) => {
            stream
                .on("error", (error) => reject(error))
                .pipe(csv())
                .on("data", (data) => results.push(data))
                .on("end", () => {
                    resolve();
                });
        });

        const turkiye = {};
        let turkiyeTotal = 1341218; //yurt dışı oy sayısı eklendi
        let rteToplam = 807974;
        let miToplam = 328934;
        let maToplam = 36896;
        let sdToplam = 157111;
        let tkToplam = 7730;
        let dpToplam = 2573;

        for (let SEHIR in SEHIRLER) {
            let sehirData = {};
            let allCount = 0;
            const sehirBolgeler = results.filter(
                (result) => result["İL ADI"] === SEHIRLER[SEHIR]
            );
            for (let ADAY in ADAYLAR) {
                sehirData[ADAYLAR[ADAY]] = sehirBolgeler.reduce(
                    (acc, cur) => acc + parseInt(cur[ADAYLAR[ADAY]]),
                    0
                );

                allCount += sehirData[ADAYLAR[ADAY]];

                if (ADAYLAR[ADAY] === "RECEP TAYYİP ERDOĞAN") {
                    rteToplam += sehirData[ADAYLAR[ADAY]];
                }
                if (ADAYLAR[ADAY] === "MUHARREM İNCE") {
                    miToplam += sehirData[ADAYLAR[ADAY]];
                }
                if (ADAYLAR[ADAY] === "MERAL AKŞENER") {
                    maToplam += sehirData[ADAYLAR[ADAY]];
                }
                if (ADAYLAR[ADAY] === "SELAHATTİN DEMİRTAŞ") {
                    sdToplam += sehirData[ADAYLAR[ADAY]];
                }
                if (ADAYLAR[ADAY] === "TEMEL KARAMOLLAOĞLU") {
                    tkToplam += sehirData[ADAYLAR[ADAY]];
                }
                if (ADAYLAR[ADAY] === "DOĞU PERİNÇEK") {
                    dpToplam += sehirData[ADAYLAR[ADAY]];
                }
            }
            for (let ADAY in ADAYLAR) {
                sehirData[ADAYLAR[ADAY] + " YUZDE"] = calculatePercentage(
                    sehirData[ADAYLAR[ADAY]],
                    allCount
                );
            }

            sehirData["TOPLAM"] = allCount;
            turkiyeTotal += allCount;
            turkiye["TOPLAM"] = turkiyeTotal;
            turkiye["RECEP TAYYİP ERDOĞAN"] = rteToplam;
            turkiye["RECEP TAYYİP ERDOĞAN YUZDE"] = calculatePercentage(
                rteToplam,
                turkiyeTotal
            );
            turkiye["MUHARREM İNCE"] = miToplam;
            turkiye["MUHARREM İNCE YUZDE"] = calculatePercentage(
                miToplam,
                turkiyeTotal
            );
            turkiye["MERAL AKŞENER"] = maToplam;
            turkiye["MERAL AKŞENER YUZDE"] = calculatePercentage(
                maToplam,
                turkiyeTotal
            );
            turkiye["SELAHATTİN DEMİRTAŞ"] = sdToplam;
            turkiye["SELAHATTİN DEMİRTAŞ YUZDE"] = calculatePercentage(
                sdToplam,
                turkiyeTotal
            );
            turkiye["TEMEL KARAMOLLAOĞLU"] = tkToplam;
            turkiye["TEMEL KARAMOLLAOĞLU YUZDE"] = calculatePercentage(
                tkToplam,
                turkiyeTotal
            );
            turkiye["DOĞU PERİNÇEK"] = dpToplam;

            turkiye["DOĞU PERİNÇEK YUZDE"] = calculatePercentage(
                dpToplam,
                turkiyeTotal
            );

            jsonData = {
                ...jsonData,
                turkiye,
                [SEHIRLER[SEHIR]]: sehirData,
            };
        }

        return NextResponse.json({ jsonData });
    } catch (error) {
        console.error(error);
        NextResponse.json({ message: "An error occurred" });
    }
}
