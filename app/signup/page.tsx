import Button from "../components/Button";
import styles from "./page.module.css";
import PageTransition from "../components/PageTransition";
import Link from "next/link";

export default function Signup() {
  return (
    <PageTransition>
      <main className={styles.main}>
        <Link href="/" transitionTypes={["nav-back"]} className={styles.back} aria-label="back">←</Link>
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
    </PageTransition>
  );
}
