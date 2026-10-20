import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "../auth/actions";
import Button from "../components/Button";
import styles from "../login/page.module.css";

export default function Home() {
  return (
    <form action={logout} className={styles.main}>
      <Suspense fallback={<h1 className={styles.title}>hi</h1>}>
        <Greeting />
      </Suspense>
      <div className={styles.actions}>
        <Button variant="secondary">log out</Button>
      </div>
    </form>
  );
}

// Reads the logged-in user from cookies, so it renders per request.
async function Greeting() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (!data?.claims) redirect("/login");

  const name = data.claims.user_metadata?.display_name ?? data.claims.email;
  return <h1 className={styles.title}>hi, {name}</h1>;
}
