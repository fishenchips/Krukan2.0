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

  if (loggedInUser) {
    return (
      <>
        <p>Welcome back {loggedInUser.data.info.firstName}.</p>
      </>
    );
  }

  return (
    <div>
      {session && (
        <>
          <h4>Please Provide us with some info about yourself!</h4>
          <UserInfoForm />
        </>
      )}
    </div>
  );
};
