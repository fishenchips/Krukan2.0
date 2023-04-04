import { useGetNextMatch } from "@/queries/matches/hooks/useGetNextMatch";
import { Loading } from "../layout/Loading";
import dayjs from "dayjs";
import Link from "next/link";
import styled from "./NextMatch.module.css";

const DUMMY_DATA = {
  _id: "ets",
  home: true,
  arena: "Zinken",
  date: new Date().toISOString(),
  opposition: "Ljungbackens IF",
  gameType: "league",
  roster: [2, 2, 2, 2],
};

export const NextMatch = () => {
  /* const { data: nextMatch, isLoading, isError } = useGetNextMatch();

  if (isLoading) return <Loading />;

  if (isError) return <></>; */

  return (
    <div className={styled.nextMatch}>
      <h3>Next Match:</h3>
      <div>
        <p>
          {DUMMY_DATA.home
            ? `Krukan - ${DUMMY_DATA.opposition}`
            : `${DUMMY_DATA.opposition} - Krukan`}
        </p>
        <p>
          {dayjs(DUMMY_DATA.date).format("dddd, D/M HH:mm")} at{" "}
          {DUMMY_DATA.arena}
        </p>
        <p>Available players: {DUMMY_DATA.roster.length}</p>
        <Link href={`/matches/${DUMMY_DATA._id}`}>Go to match</Link>
      </div>
    </div>
  );
};
