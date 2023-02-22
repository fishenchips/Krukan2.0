import styles from "./Header.module.css";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { SignInButton } from "./SignInButton";

export const Header = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  console.log(session);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/logged-out" });

    push(data.url);
  };

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h3>FC Krukan</h3>
      </div>
      <div className={styles.userHub}>
        {session ? (
          <button onClick={handleSignOut}>Sign out</button>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
};
