import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Loading } from "../layout/Loading";

/* Todo 
  fix filtering
*/

export const MatchSchedule = () => {
  const { push } = useRouter();

  const { data: matches, isLoading } = useGetMatches();

  if (isLoading) return <Loading />;

  if (matches?.length === 0) return <p>No matches available.</p>;

  return (
    <MatchesDiv>
      <MatchesTable>
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
            <MatchTr key={match._id}>
              <td>{match.date}</td>
              <td>{match.time}</td>
              <MatchTd>
                {match.home
                  ? `Krukan - ${match.opposition} `
                  : `${match.opposition} - Krukan `}
              </MatchTd>
              <td>
                {match.gameType.charAt(0).toUpperCase() +
                  match.gameType.slice(1)}
              </td>
              <td>{match.arena}</td>
            </MatchTr>
          ))}
        </tbody>
      </MatchesTable>
    </MatchesDiv>
  );
};

const MatchesDiv = styled.div`
  @media (min-width: 768px) {
    width: 70vw;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
  }
`;

const MatchesTable = styled.table`
  width: 100%;
  padding: 30px;
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
  border: none;
  cursor: poiner;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const MatchTd = styled.td`
  text-align: center;
  color: #80051b;
  font-weight: 600;
`;
