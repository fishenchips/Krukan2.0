import { Loading } from "@/components/layout/Loading";
import { PlayerList } from "@/components/layout/PlayerList";
import { useSession } from "next-auth/react";
import { useState } from "react";
import cookieCutter from "cookie-cutter";
import { AdminLogin } from "@/components/admin/login";
import { useUpdatePlayerLeaderboard } from "@/queries/leaderboards/hooks/player/useUpdatePlayerLeaderboard";
import { playerLeaderboardKey } from "@/queries/leaderboards/hooks/player/useGetPlayerLeaderboard";

const EditPlayerLeaderboardPage = () => {
  const [password, setPassword] = useState<string | undefined>("");
  const { status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") return <p>Access denied.</p>;

  return (
    <>
      {password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
      cookieCutter.get("isAdmin") ? (
        <PlayerList
          mutation={useUpdatePlayerLeaderboard}
          key={playerLeaderboardKey}
        />
      ) : (
        <AdminLogin setPassword={setPassword} />
      )}
    </>
  );
};
export default EditPlayerLeaderboardPage;
