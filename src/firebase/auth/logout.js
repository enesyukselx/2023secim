import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

export default async function logOut() {
    let result = null,
        error = null;
    try {
        result = await signOut(getAuth());
    } catch (e) {
        error = e;
    }

    return { result, error };
}
