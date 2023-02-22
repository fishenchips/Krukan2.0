import { UserLandingPage } from "@/components/users/UserLandingPage";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Home = () => {
  const { data: session } = useSession();

  const { push, asPath } = useRouter();

  console.log(session);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/logged-out" });

    push(data.url);
  };

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };

  return (
    <div>
      {session ? (
        <>
          <button onClick={handleSignOut}>Sign out</button>
          <UserLandingPage />
        </>
      ) : (
        <>
          <button onClick={handleSignIn}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Home;
