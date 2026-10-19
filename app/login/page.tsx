import Button from "../components/Button";
import styles from "./page.module.css";

export default function Login() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>log in</h1>

      <div className={styles.form}>
        <input className={styles.input} type="email" placeholder="email" />
        <input className={styles.input} type="password" placeholder="password" />
        <a className={styles.forgot} href="#">forgot password?</a>
      </div>

      <div className={styles.actions}>
        <Button>log in</Button>
      </div>
    </main>
  );
}