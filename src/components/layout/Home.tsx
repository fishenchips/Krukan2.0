import { useSession } from "next-auth/react";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styled from "styled-components";

export const LandingPage = () => {
  const { data: session } = useSession();

  return (
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
      <LinksDiv>
        <p>Make sure you follow us on our social medias!</p>
        <div>
          <SocialMediaLink
            href={"https://www.facebook.com/fckrukan"}
            target="_blank"
          >
            <BsFacebook />
          </SocialMediaLink>
          <SocialMediaLink
            href={"https://www.instagram.com/fckrukan/"}
            target="_blank"
          >
            <BsInstagram />
          </SocialMediaLink>
        </div>
      </LinksDiv>
    </div>
  );
};

const WelcomeMsg = styled.p`
  font-size: 1.5rem;
`;

const LinksDiv = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialMediaLink = styled(Link)`
  font-size: 1.5rem;
  padding: 1rem;
`;
