import { LandingPage } from "@/components/layout/Home";
import { SocialMedia } from "@/components/layout/SocialMedia";
import { NextMatch } from "@/components/match/NextMatch";
import { UserLandingPage } from "@/components/users/UserLandingPage";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? <UserLandingPage /> : <LandingPage />}
      <NextMatch />
      <SocialMedia />
    </div>
  );
};

export default Home;
