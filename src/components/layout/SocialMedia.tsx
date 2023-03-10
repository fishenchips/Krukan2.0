import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styled from "styled-components";

export const SocialMedia = () => {
  return (
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
  );
};

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
