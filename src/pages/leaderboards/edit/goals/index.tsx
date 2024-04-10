import { Loading } from "@/components/layout/Loading";
import { PlayerList } from "@/components/layout/PlayerList";
import { useSession } from "next-auth/react";
import { useState } from "react";
import cookieCutter from "cookie-cutter";
import { AdminLogin } from "@/components/admin/login";
import { useUpdateGoalsLeaderboard } from "@/queries/leaderboards/hooks/goals/useUpdateGoalsLeaderboard";
import { goalsLeaderboardKey } from "@/queries/leaderboards/hooks/goals/useGetGoalsLeaderboard";

const EditGoalsLeaderboardPage = () => {
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
          mutation={useUpdateGoalsLeaderboard}
          key={goalsLeaderboardKey}
        />
      ) : (
        <AdminLogin setPassword={setPassword} />
      )}
    </>
  );
};
export default EditGoalsLeaderboardPage;
