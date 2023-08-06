import { useGetNextMatch } from "@/queries/matches/hooks/useGetNextMatch";
import dayjs from "dayjs";
import Link from "next/link";
import styled from "./NextMatch.module.css";

export const NextMatch = () => {
  const { data: nextMatch, isLoading, isError } = useGetNextMatch();

  if (isError || isLoading) return <></>;

  const filteredRoster = nextMatch.roster?.filter((player) => player._id);

  return (
    <div className={styled.nextMatch}>
      <h3>Next Match:</h3>
      <div>
        <p>
          {nextMatch.home
            ? `Krukan - ${nextMatch.opposition}`
            : `${nextMatch.opposition} - Krukan`}
        </p>
        <p>
          {dayjs(nextMatch.date).format("dddd, D/M HH:mm")} at {nextMatch.arena}
        </p>
        <p>Available players: {filteredRoster ? filteredRoster.length : 0}</p>
        <Link href={`/matches/${nextMatch._id}`}>Go to match</Link>
      </div>
    </div>
  );
};
