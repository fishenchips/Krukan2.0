import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styled from "styled-components";

export const SocialMedia = () => {
  return (
    <LinksDiv>
      <p>Make sure you follow us on our social medias!</p>
      <div>
        <Facebook href={"https://www.facebook.com/fckrukan"} target="_blank">
          <BsFacebook />
        </Facebook>
        <Instagram href={"https://www.instagram.com/fckrukan/"} target="_blank">
          <BsInstagram />
        </Instagram>
      </div>
    </LinksDiv>
  );
};

const LinksDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    max-width: 500px;
    align-items: center;
    justify-content: space-between;
  }
`;

const Facebook = styled(Link)`
  font-size: 1.5rem;
  margin-right: 2rem;
  color: #3b5998;

  &:visited {
    color: #3b5998;
  }
`;

const Instagram = styled(Link)`
  font-size: 1.25rem;
  padding: 1px 1.5px 0 1.5px;
  border-radius: 5px;
  text-align: center;
  color: white;
  background: background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );

  &:visited {
    background: background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
`;
