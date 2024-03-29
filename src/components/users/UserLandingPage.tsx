import { useSession } from "next-auth/react";
import { Loading } from "../layout/Loading";
import { UserInfoForm } from "./UserInfoForm";
import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import styles from "./UserLandingPage.module.css";
import { Player } from "@/utils/types/playerInfo";

export const UserLandingPage = () => {
  const { data: session } = useSession();

  const { data: loggedInUser, isLoading } = useGetLoggedInUser(
    session?.user?.email as string,
    { retry: 1 }
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      {Object.hasOwn(loggedInUser as Player, "info") ? (
        <>
          <p className={styles.welcomeMsg}>
            Welcome back {loggedInUser?.info.firstName}.
          </p>
        </>
      ) : (
        <div>
          <p>Please Provide us with some info about yourself!</p>
          <UserInfoForm />
        </div>
      )}
    </div>
  );
};
