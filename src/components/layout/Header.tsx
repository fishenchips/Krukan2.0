import styled from "./Header.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { BiFootball } from "react-icons/bi";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  const { data: session, status } = useSession();

  const { push } = useRouter();

  return (
    <header className={styled.header}>
      <div className={styled.banner}>
        <h3 className={styled.title} onClick={() => push("/")}>
          FC Krukan - Lirarnas Lag
        </h3>
      </div>
      <div className={styled.burger}>
        <HamburgerMenu />
      </div>
      <div className={styled.nonBurger}>
        <div className={styled.title} onClick={() => push("/matches")}>
          <span>
            <BiFootball />
          </span>
          <span>Matches</span>
        </div>
        <div className={styled.userHub}>
          {status === "loading" ? (
            ""
          ) : session ? (
            <SignOutButton />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </header>
  );
};
