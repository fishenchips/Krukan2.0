import { Roster } from "@/utils/types/match";
import { StyledPosition, StyledPositions } from "./styled";

interface Props {
  roster: Roster;
}

export const MatchRoster: React.FC<Props> = ({ roster }) => {
  const goalkeepers = roster.filter((p) => p.info.position === "goal-keeper");
  const defenders = roster.filter((p) => p.info.position === "defender");
  const midfielders = roster.filter((p) => p.info.position === "midfielder");
  const strikers = roster.filter((p) => p.info.position === "striker");

  return (
    <>
      {roster.length > 0 ? (
        <div>
          <p>{roster.length} Available players</p>
          <StyledPositions>
            <div>
              <StyledPosition $position={"#f72f2f"}>
                Goal keepers
              </StyledPosition>
              <div>
                {goalkeepers.length < 1 ? (
                  <p>-</p>
                ) : (
                  goalkeepers.map((gk) => {
                    return (
                      <p key={gk._id}>
                        {gk.info.firstName} {gk.info.lastName}
                      </p>
                    );
                  })
                )}
              </div>
            </div>
            <div>
              <StyledPosition $position={"#FFEA00"}>Defenders</StyledPosition>
              <div>
                {defenders.length < 1 ? (
                  <p>-</p>
                ) : (
                  defenders.map((d) => {
                    return (
                      <p key={d._id}>
                        {d.info.firstName} {d.info.lastName}
                      </p>
                    );
                  })
                )}
              </div>
            </div>
            <div>
              <StyledPosition $position={"#34e024"}>Midfielders</StyledPosition>
              <div>
                {midfielders.length < 1 ? (
                  <p>-</p>
                ) : (
                  midfielders.map((m) => {
                    return (
                      <p key={m._id}>
                        {m.info.firstName} {m.info.lastName}
                      </p>
                    );
                  })
                )}
              </div>
            </div>
            <div>
              <StyledPosition $position={"#424ef5"}>Strikers</StyledPosition>
              <div>
                {strikers.length < 1 ? (
                  <p>-</p>
                ) : (
                  strikers.map((s) => {
                    return (
                      <p key={s._id}>
                        {s.info.firstName} {s.info.lastName}
                      </p>
                    );
                  })
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
