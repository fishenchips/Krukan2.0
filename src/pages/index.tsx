import Head from "next/head";
import { useSession } from "next-auth/react";

import { LandingPage } from "@/components/layout/Home";
import { SocialMedia } from "@/components/layout/SocialMedia";
import { NextMatch } from "@/components/match/NextMatch";
import { UserLandingPage } from "@/components/users/UserLandingPage";
import { LinkComponent } from "@/components/layout/Link";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>FC Krukan - Lirarnas Lag</title>
        <meta
          name="description"
          content="Welcome to the hub of FC Krukan. Create a user to be able to attend future matches!"
          key="desc"
        />
      </Head>
      <div>
        {session ? <UserLandingPage /> : <LandingPage />}
        <LinkComponent
          url={
            "https://docs.google.com/spreadsheets/d/1F2_436hN48Fcj2SZ-s1sGDUmpdRCcoVNtoEe1Jh68hw/edit#gid=0"
          }
          text={"Materialschema"}
        />
        <LinkComponent url={"friskvard.pdf"} text={"Friskvårdsblankett"} />
        <NextMatch />
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;
