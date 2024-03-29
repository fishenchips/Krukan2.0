import { useRouter } from "next/router";
import { useGetMatchById } from "@/queries/matches/hooks/useGetMatchById";
import { Loading } from "@/components/layout/Loading";
import { AttendMatch } from "@/components/match/AttendMatch";
import { MatchRoster } from "@/components/match/MatchRoster";
import { MatchInfo } from "@/components/match/MatchInfo";
import { useSession } from "next-auth/react";
import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import type { AdjacentMatchType } from "@/utils/types/match";
import { useEffect, useState } from "react";
import { AdjacentMatch } from "@/components/match/AdjacentMatch";

const MatchPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const [prevMatch, setPrevMatch] = useState<AdjacentMatchType | undefined>();
  const [nextMatch, setNextMatch] = useState<AdjacentMatchType | undefined>();

  const { data: session } = useSession();

  const {
    data: match,
    isLoading,
    refetch,
  } = useGetMatchById(id as string, {
    enabled: !!id,
  });

  const { data: matches } = useGetMatches();
  const matchIndex = matches?.findIndex((m) => m._id === match?._id);

  useEffect(() => {
    const prev = matches?.find(
      (m) => m === matches[(matchIndex as number) - 1]
    );
    setPrevMatch(
      prev
        ? {
            id: prev?._id,
            opposition: prev?.opposition,
            home: prev?.home,
          }
        : undefined
    );
    const next = matches?.find(
      (m) => m === matches[(matchIndex as number) + 1]
    );
    setNextMatch(
      next
        ? {
            id: next?._id,
            opposition: next?.opposition,
            home: next?.home,
          }
        : undefined
    );
  }, [matchIndex, matches]);

  if (isLoading || !isReady) return <Loading />;

  if (!match) {
    return <p>Match not found</p>;
  }

  return (
    <>
      <AdjacentMatch prevMatch={prevMatch} nextMatch={nextMatch} />
      <MatchInfo match={match} />
      {session ? (
        <AttendMatch
          matchId={id as string}
          roster={match.roster}
          refetch={refetch}
        />
      ) : (
        <i style={{ color: "rgb(80, 80, 80)" }}>Log in to attend match</i>
      )}
      <MatchRoster roster={match.roster} />
    </>
  );
};

export default MatchPage;
