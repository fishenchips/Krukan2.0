import { useRouter } from "next/router";
import { useGetMatchById } from "@/queries/matches/hooks/useGetMatchById";
import { Loading } from "@/components/layout/Loading";
import { AttendMatch } from "@/components/match/AttendMatch";
import { MatchRoster } from "@/components/match/MatchRoster";
import { MatchInfo } from "@/components/match/MatchInfo";

const MatchPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const { data: match, isLoading } = useGetMatchById(id as string);

  if (isLoading || !isReady) return <Loading />;

  if (!match) {
    return <p>Match not found</p>;
  }

  return (
    <>
      <MatchInfo match={match} />
      <AttendMatch matchId={id as string} roster={match.roster} />
      <MatchRoster roster={match.roster} />
    </>
  );
};

export default MatchPage;
