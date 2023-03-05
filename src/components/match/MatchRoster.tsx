import { Roster } from "@/utils/types/match";

interface Props {
  roster: Roster;
}

export const MatchRoster: React.FC<Props> = ({ roster }) => {
  console.log({ roster });

  return (
    <>
      {roster.length > 0 ? (
        <div>
          <p>Players:</p>
          {roster.map((player) => (
            <span key={player._id}>
              {player.info.firstName} {player.info.lastName}
            </span>
          ))}
        </div>
      ) : (
        <p>No players are attending this match.</p>
      )}
    </>
  );
};
