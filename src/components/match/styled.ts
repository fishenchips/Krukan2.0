import styled from "styled-components";

interface StyledProps {
  $position: string;
}

export const StyledPositions = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
  }

  @media (min-width: 900px) {
    width: 50vw;
  }
`;

export const StyledPosition = styled.p<StyledProps>`
  color: ${(props) => props.$position};
  font-size: 1.2rem;
  font-wight: 700;
`;
