import Link from "next/link";
import { useSession } from "next-auth/react";
import { Loading } from "../layout/Loading";
import { UserInfoForm } from "./UserInfoForm";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import styles from "./UserLandingPage.module.css";

export const UserLandingPage = () => {
  const { data: session } = useSession();

  const { data: loggedInUser, isLoading } = useGetLoggedInUser(
    session?.user?.email as string,
    { retry: 1 }
  );

  if (isLoading) return <Loading />;

  if (!session) {
    return (
      <div>
        <p className={styles.welcomeMsg}>Welcome to Krukan 2.0!</p>
        <p>
          Please log in by pressing the log in button. Enter your e-mail and
          open your inbox.
        </p>
      </div>
    );
  }

  return (
    <div>
      {loggedInUser ? (
        Object.hasOwn(loggedInUser, "info") ? (
          <>
            <p className={styles.welcomeMsg}>
              Welcome back {loggedInUser.info.firstName}.
            </p>
            <div>
              <Link href={"/matches"}> Go to matches</Link>
            </div>
          </>
        ) : (
          <>
            <p>Please Provide us with some info about yourself!</p>
            <UserInfoForm />
          </>
        )
      ) : (
        <p>Something went wrong. Please try log in agian</p>
      )}
    </div>
  );
};
