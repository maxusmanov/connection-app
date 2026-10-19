import Button from "../components/Button";
import styles from "./page.module.css";
import Bokeh from "../components/Bokeh";
import Link from "next/link";

export default function Signup() {
  return (
    <main className={styles.main}>
      <Bokeh />
      <Link href="/" className={styles.back} aria-label="back">←</Link>
      <h1 className={styles.title}>sign up</h1>

      <div className={styles.form}>
        <input className={styles.input} type="text" placeholder="name" autoComplete="name" />
        <input className={styles.input} type="email" placeholder="email" autoComplete="email" />
        <input className={styles.input} type="password" placeholder="password" autoComplete="new-password" />
      </div>

      <div className={styles.actions}>
        <Button>sign up</Button>
      </div>
    </main>
  );
}
