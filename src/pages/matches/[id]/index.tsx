import { useRouter } from "next/router";
import { useGetMatchById } from "@/queries/matches/hooks/useGetMatchById";
import { Loading } from "@/components/layout/Loading";
import { AttendMatch } from "@/components/match/AttendMatch";
import { MatchRoster } from "@/components/match/MatchRoster";
import { MatchInfo } from "@/components/match/MatchInfo";
import { useSession } from "next-auth/react";

const MatchPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const { data: session } = useSession();

  const { data: match, isLoading } = useGetMatchById(id as string);

  if (isLoading || !isReady) return <Loading />;

  if (!match) {
    return <p>Match not found</p>;
  }

  return (
    <>
      <MatchInfo match={match} />
      {session ? (
        <AttendMatch matchId={id as string} roster={match.roster} />
      ) : (
        <p>Log in to attend match!</p>
      )}
      <MatchRoster roster={match.roster} />
    </>
  );
};

export default MatchPage;
