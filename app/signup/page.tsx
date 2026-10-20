"use client";

import { useActionState } from "react";
import Button from "../components/Button";
import styles from "./page.module.css";
import PageTransition from "../components/PageTransition";
import Link from "next/link";
import { signup } from "../auth/actions";

export default function Signup() {
  const [state, formAction, pending] = useActionState(signup, {});

  return (
    <PageTransition>
      <form action={formAction} className={styles.main}>
        <Link href="/" transitionTypes={["nav-back"]} className={styles.back} aria-label="back">←</Link>
        <h1 className={styles.title}>sign up</h1>

        <div className={styles.form}>
          <input className={styles.input} name="name" type="text" placeholder="name" autoComplete="name" required />
          <input className={styles.input} name="email" type="email" placeholder="email" autoComplete="email" required />
          <input className={styles.input} name="password" type="password" placeholder="password" autoComplete="new-password" minLength={6} required />
          {state.error && <p className={styles.error} role="alert">{state.error}</p>}
          {state.message && <p className={styles.message}>{state.message}</p>}
        </div>

        <div className={styles.actions}>
          <Button disabled={pending}>{pending ? "signing up…" : "sign up"}</Button>
        </div>
      </form>
    </PageTransition>
  );
}
