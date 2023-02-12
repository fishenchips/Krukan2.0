import { useSession, signIn, signOut } from "next-auth/react";
import useRouter from "next/router";

const Home = () => {
  const { data: session } = useSession();

  const { push } = useRouter();

  console.log(session);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/logged-out" });

    push(data.url);
  };

  return (
    <div>
      <p>allo</p>
      {session ? (
        <>
          <p>Session exists</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Home;
