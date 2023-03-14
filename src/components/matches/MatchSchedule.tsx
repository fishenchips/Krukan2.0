import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Loading } from "../layout/Loading";

export const MatchSchedule = () => {
  const { push } = useRouter();

  const { data: matches, isLoading } = useGetMatches();

  if (isLoading) return <Loading />;

  if (matches?.length === 0) return <p>No matches available.</p>;

  /*   console.log(new Date(matches[0].date).toLocaleDateString("en-GB"), "here");
  use this later, fix type of date
   */

  return (
    <MatchesDiv>
      <MatchesTable cellSpacing="0" cellPadding="0">
        <Thead>
          <tr>
            <Th>DATE</Th>
            <Th>TIME</Th>
            <Th>TEAMS</Th>
            <Th>TYPE</Th>
            <Th>ARENA</Th>
          </tr>
        </Thead>
        <tbody>
          {matches?.map((match) => (
            <MatchTr
              key={match._id}
              onClick={() => push(`/matches/${match._id}`)}
            >
              <td>{match.date}</td>
              <MatchTimeTypeArena>{match.time}</MatchTimeTypeArena>
              <MatchTd>
                {match.home
                  ? `Krukan - ${match.opposition} `
                  : `${match.opposition} - Krukan `}
              </MatchTd>
              <MatchTimeTypeArena>
                {match.gameType.charAt(0).toUpperCase() +
                  match.gameType.slice(1)}
              </MatchTimeTypeArena>
              <MatchTimeTypeArena>{match.arena}</MatchTimeTypeArena>
            </MatchTr>
          ))}
        </tbody>
      </MatchesTable>
    </MatchesDiv>
  );
};

const MatchesDiv = styled.div`
  width: 90wv;
  border: 1px solid blue;
  @media (min-width: 768px) {
    width: 70vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
  }
`;

const MatchesTable = styled.table`
  width: 100%;
  padding: 30px;

  tr {
    cursor: pointer;
  }
`;

const Thead = styled.thead`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Th = styled.th`
  padding-bottom: 3px;
  border-bottom: 1px solid #e6e6e6;
`;

const MatchTr = styled.tr`
  height: 2.5rem;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const MatchTimeTypeArena = styled.tr`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MatchTd = styled.td`
  text-align: center;
  color: #80051b;
  font-weight: 600;
`;
