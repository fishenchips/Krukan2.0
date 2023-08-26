import { Roster } from "@/utils/types/match";
import { StyledPosition, StyledPositions } from "./styled";
import styles from "./MatchInfo.module.css";

interface Props {
  roster?: Roster;
}

export const MatchRoster: React.FC<Props> = ({ roster }) => {
  // Fix bug where empty player object is stored in DB
  const filteredRoster = roster?.filter((player) => player._id);

  if (!filteredRoster) return <p>No players are attending this match.</p>;

  const goalkeepers = filteredRoster.filter(
    ({ info }) => info.position === "goal-keeper"
  );
  const defenders = filteredRoster.filter(
    ({ info }) => info.position === "defender"
  );
  const midfielders = filteredRoster.filter(
    ({ info }) => info.position === "midfielder"
  );
  const strikers = filteredRoster.filter(
    ({ info }) => info.position === "striker"
  );

  return (
    <>
      {filteredRoster.length > 0 ? (
        <div className={styles.textSecond}>
          <p>{filteredRoster.length} available players</p>
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
