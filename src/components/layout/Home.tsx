import { useSession } from "next-auth/react";
import styled from "styled-components";
import { SocialMedia } from "./SocialMedia";

export const LandingPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>
        <WelcomeMsg>Welcome to Krukan 2.0!</WelcomeMsg>
        {session ? (
          ""
        ) : (
          <p>
            Please log in by pressing the log in button. Enter your e-mail and
            open your inbox.
          </p>
        )}
      </div>
      <SocialMedia />
    </>
  );
};

const WelcomeMsg = styled.p`
  font-size: 1.5rem;
`;
