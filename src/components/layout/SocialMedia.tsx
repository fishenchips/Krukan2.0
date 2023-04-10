import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styled from "./SocialMedia.module.css";

export const SocialMedia = () => {
  return (
    <div className={styled.linksDiv}>
      <p>Make sure you follow us on our social medias!</p>
      <div>
        <Link
          className={styled.facebook}
          href={"https://www.facebook.com/fckrukan"}
          target="_blank"
        >
          <BsFacebook />
        </Link>
        <Link
          className={styled.instagram}
          href={"https://www.instagram.com/fckrukan/"}
          target="_blank"
        >
          <BsInstagram />
        </Link>
      </div>
    </div>
  );
};
