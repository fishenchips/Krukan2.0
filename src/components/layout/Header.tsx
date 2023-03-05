import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const Header = () => {
  const { data: session, status } = useSession();

  const { push } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h3 className={styles.title} onClick={() => push("/")}>
          FC Krukan - Lirarnas Lag{" "}
        </h3>
      </div>
      <div className={styles.userHub}>
        {status === "loading" ? (
          ""
        ) : session ? (
          <SignOutButton />
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
};
