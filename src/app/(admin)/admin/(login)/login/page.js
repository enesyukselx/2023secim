import styles from "./page.module.scss";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

const Page = () => {
    return (
        <div className={styles.content}>
            <InputText placeholder="Kullanıcı Adı" />
            <InputText type="password" placeholder="Password" />
            <Button>Giriş Yap</Button>
        </div>
    );
};

export default Page;
