import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const Header = () => {
  const { data: session, status } = useSession();

  console.log({ status });

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h3>FC Krukan - Lirarnas Lag </h3>
      </div>
      <div className={styles.userHub}>
        {status === "loading" ? (
          <p></p>
        ) : session ? (
          <SignOutButton />
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
};
