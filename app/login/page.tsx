import Button from "../components/Button";
import styles from "./page.module.css";
import PageTransition from "../components/PageTransition";
import Link from "next/link";

export default function Login() {
  return (
    <PageTransition>
      <main className={styles.main}>
        <Link href="/" transitionTypes={["nav-back"]} className={styles.back} aria-label="back">←</Link>
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
    </PageTransition>
  );
}

