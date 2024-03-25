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
            "https://docs.google.com/document/d/1LfKt2QWIXLbU5tEcm8o3w37fBjbj4UBt3f5HbGN-x4I"
          }
          text={"Materialschema 2024"}
        />
        <LinkComponent url={"friskvard.pdf"} text={"Friskvårdsblankett"} />
        <NextMatch />
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;
