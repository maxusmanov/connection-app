import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>for the record</h1>
      <p className={styles.subtitle}>rate what you’re listening to.</p>
        <div className={styles.actions}>
        <Button>sign up</Button>
        <Button variant="secondary">log in</Button>
      </div>
    </main>
  );
}