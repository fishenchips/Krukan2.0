import { useGetMatches } from "@/queries/matches/hooks/useGetMatches";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Loading } from "../layout/Loading";
import dayjs from "dayjs";

export const MatchSchedule = () => {
  const { push } = useRouter();

  const { data: matches, isLoading } = useGetMatches();

  if (isLoading) return <Loading />;

  if (matches?.length === 0) return <p>No matches available.</p>;

  return (
    <MatchesDiv>
      <MatchesTable cellSpacing="0" cellPadding="0">
        <Thead>
          <tr>
            <Th>DATE</Th>
            <Th>TEAMS</Th>
            <Th>TYPE</Th>
            <Th>ARENA</Th>
          </tr>
        </Thead>
        <tbody>
          {matches?.map((match) => {
            return (
              <MatchTr
                key={match._id}
                onClick={() => push(`/matches/${match._id}`)}
              >
                <MatchTimeTypeArena>
                  {dayjs(match.date).format("dddd, D/M HH:mm")}
                </MatchTimeTypeArena>
                <ShortDate>
                  {dayjs(match.date).format("ddd, D/M HH:mm")}
                </ShortDate>
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
            );
          })}
        </tbody>
      </MatchesTable>
    </MatchesDiv>
  );
};

const MatchesDiv = styled.div`
  width: 90wv;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;

  @media (min-width: 900px) {
    width: 70vw;
  }
`;

const MatchesTable = styled.table`
  width: 100%;
  padding: 10px;

  tr {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 30px;
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

const MatchTimeTypeArena = styled.td`
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MatchTd = styled.td`
  text-align: center;
  color: #80051b;
  font-weight: 600;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 0.75rem;
  }
`;

const ShortDate = styled.td`
  font-size: 0.75rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
