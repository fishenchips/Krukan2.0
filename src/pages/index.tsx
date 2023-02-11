import { useSession, signIn } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <p>allo</p>
      {session ? (
        <p>Session exists</p>
      ) : (
        <>
          <button onClick={() => signIn}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Home;
