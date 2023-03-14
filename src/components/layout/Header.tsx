import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { BiFootball } from "react-icons/bi";
import { HamburgerMenu } from "./HamburgerMenu";
import styled from "styled-components";

export const Header = () => {
  const { data: session, status } = useSession();

  const { push } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h3 className={styles.title} onClick={() => push("/")}>
          FC Krukan - Lirarnas Lag
        </h3>
      </div>
      <Burger>
        <HamburgerMenu />
      </Burger>
      <NonBurger>
        <div className={styles.title} onClick={() => push("/matches")}>
          <span>
            <BiFootball />
          </span>
          <span>Matches</span>
        </div>
        <div className={styles.userHub}>
          {status === "loading" ? (
            ""
          ) : session ? (
            <SignOutButton />
          ) : (
            <SignInButton />
          )}
        </div>
      </NonBurger>
    </header>
  );
};

const Burger = styled.div`
  margin-right: 50px;
  @media (min-width: 500px) {
    display: none;
  }
`;

const NonBurger = styled.div`
  display: none;
  @media (min-width: 500px) {
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }
`;
