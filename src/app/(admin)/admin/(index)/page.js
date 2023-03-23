"use client";

import React from "react";
import logOut from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const clickHandle = async () => {
        const { result, error } = await logOut();

        if (error) {
            return console.log(error);
        }

        return router.push("/admin/login");
    };

    return (
        <>
            <button onClick={clickHandle}>çıkış</button>
        </>
    );
};

export default Page;
