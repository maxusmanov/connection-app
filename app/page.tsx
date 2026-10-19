import Button from "./components/Button";
import styles from "./page.module.css";
import Bokeh from "./components/Bokeh";

export default function Home() {
  return (
    <main className={styles.main}>
      <Bokeh />
      <h1 className={styles.title}>for the record</h1>
      <p className={styles.subtitle}>rate what you’re listening to.</p>
      <div className={styles.actions}>
        <Button href="/signup">sign up</Button>
        <Button variant="secondary" href="/login">log in</Button>
      </div>
    </main>
  );
}