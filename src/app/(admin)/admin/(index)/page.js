"use client";

import logOut from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";

const Page = () => {
    const router = useRouter();
    const { user } = useAuthContext();

    useEffect(() => {
        if (!user) {
            router.push("/admin/login");
        }
    }, []);

    const clickHandle = async () => {
        const { result, error } = await logOut();

        if (error) {
            return console.log(error);
        }

        return router.push("/admin/login");
    };

    if (!user) {
        return;
    } else {
        return (
            <>
                <button onClick={clickHandle}>çıkış</button>
            </>
        );
    }
};

export default Page;
