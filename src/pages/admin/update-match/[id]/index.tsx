import { Loading } from "@/components/layout/Loading";
import { UpdateMatch } from "@/components/matches/UpdateMatch";
import { useGetMatchById } from "@/queries/matches/hooks/useGetMatchById";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const UpdateMatchPage = () => {
  const {
    query: { id },
    isReady,
  } = useRouter();

  const { data: match, isLoading } = useGetMatchById(id as string);

  const { status } = useSession();

  if (status === "unauthenticated") return <p>Access denied.</p>;

  if (isLoading || !isReady) return <Loading />;

  if (!match) {
    return <p>Match not found</p>;
  }

  return (
    <>
      <Link href={"/admin"}>Matches</Link>
      <UpdateMatch
        _id={match._id}
        home={match.home}
        arena={match.arena}
        date={match.date}
        gameType={match.gameType}
        opposition={match.opposition}
      />
    </>
  );
};

export default UpdateMatchPage;
