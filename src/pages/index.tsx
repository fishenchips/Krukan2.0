import { LandingPage } from "@/components/layout/Home";
import { UserLandingPage } from "@/components/users/UserLandingPage";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return <div>{session ? <UserLandingPage /> : <LandingPage />}</div>;
};

export default Home;
