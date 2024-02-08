import { Loading } from "@/components/layout/Loading";
import { PlayerList } from "@/components/layout/PlayerList";
import { useSession } from "next-auth/react";
import { useState } from "react";
import cookieCutter from "cookie-cutter";
import { AdminLogin } from "@/components/admin/login";

const EditPlayerLeaderboardPage = () => {
  const [password, setPassword] = useState<string | undefined>("");
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") return <p>Access denied.</p>;

  return (
    <>
      {password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
      cookieCutter.get("isAdmin") ? (
        <PlayerList />
      ) : (
        <AdminLogin setPassword={setPassword} />
      )}
    </>
  );
};
export default EditPlayerLeaderboardPage;
