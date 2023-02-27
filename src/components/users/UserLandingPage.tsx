import { useGetLoggedInUser } from "@/queries/users/hooks/useGetLoggedInUser";
import { useSession } from "next-auth/react";
import { UserInfoForm } from "./UserInfoForm";

export const UserLandingPage = () => {
  const { data: session } = useSession();

  const { data: loggedInUser, isLoading } = useGetLoggedInUser(
    session?.user?.email as string
  );

  console.log({ loggedInUser }, "user");
  console.log({ session });

  if (isLoading) return <p>Loading..</p>;

  if (!session) {
    return <p>Welcome</p>;
  }

  return (
    <div>
      {loggedInUser && (
        <>
          <p>Welcome back {loggedInUser.info.firstName}.</p>
          {Object.hasOwn(loggedInUser, "info") ? (
            ""
          ) : (
            <>
              <h4>Please Provide us with some info about yourself!</h4>
              <UserInfoForm />
            </>
          )}
        </>
      )}
    </div>
  );
};
