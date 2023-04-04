import { LandingPage } from "@/components/layout/Home";
import { NextMatch } from "@/components/match/NextMatch";
import { UserLandingPage } from "@/components/users/UserLandingPage";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? <UserLandingPage /> : <LandingPage />} <NextMatch />
    </div>
  );
};

export default Home;
