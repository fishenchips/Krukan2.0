import { Roster } from "@/utils/types/match";
import { StyledPosition, StyledPositions } from "./styled";
import { useState } from "react";

interface Props {
  roster?: Roster;
}

export const MatchRoster: React.FC<Props> = ({ roster }) => {
  const [playerAmount, setPlayerAmount] = useState<number>(0);
  if (!roster) return <p>No players are attending this match.</p>;

  const goalkeepers = roster.filter(
    ({ info }) => info.position === "goal-keeper"
  );
  const defenders = roster.filter(({ info }) => info.position === "defender");
  const midfielders = roster.filter(
    ({ info }) => info.position === "midfielder"
  );
  const strikers = roster.filter(({ info }) => info.position === "striker");

  //fixing bug with some player attending with empty object
  roster.forEach((player) => {
    if (player.info.firstName) {
      setPlayerAmount((prev) => prev + 1);
    }
  });

  return (
    <>
      {roster.length > 0 ? (
        <div>
          <p>{playerAmount} available players</p>
          <StyledPositions>
            <div>
              <StyledPosition $position={"#f72f2f"}>
                Goal keepers
              </StyledPosition>
              <div>
                {goalkeepers.length < 1 ? (
                  <p>-</p>
                ) : (
                  goalkeepers.map((gk) => (
                    <p key={gk._id}>
                      {gk.info.firstName} {gk.info.lastName}
                    </p>
                  ))
                )}
              </div>
            </div>
            <div>
              <StyledPosition $position={"#FFEA00"}>Defenders</StyledPosition>
              <div>
                {defenders.length < 1 ? (
                  <p>-</p>
                ) : (
                  defenders.map((d) => (
                    <p key={d._id}>
                      {d.info.firstName} {d.info.lastName}
                    </p>
                  ))
                )}
              </div>
            </div>
            <div>
              <StyledPosition $position={"#34e024"}>Midfielders</StyledPosition>
              <div>
                {midfielders.length < 1 ? (
                  <p>-</p>
                ) : (
                  midfielders.map((m) => (
                    <p key={m._id}>
                      {m.info.firstName} {m.info.lastName}
                    </p>
                  ))
                )}
              </div>
            </div>
            <div>
              <StyledPosition $position={"#424ef5"}>Strikers</StyledPosition>
              <div>
                {strikers.length < 1 ? (
                  <p>-</p>
                ) : (
                  strikers.map((s) => (
                    <p key={s._id}>
                      {s.info.firstName} {s.info.lastName}
                    </p>
                  ))
                )}
              </div>
            </div>
          </StyledPositions>
        </div>
      ) : (
        <p>No players are attending this match.</p>
      )}
    </>
  );
};
