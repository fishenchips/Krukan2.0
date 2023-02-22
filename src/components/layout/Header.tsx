import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h3>FC Krukan</h3>
      </div>
      <div className={styles.userHub}>
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
};
