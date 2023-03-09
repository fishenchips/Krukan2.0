import { LandingPage } from "@/components/layout/Home";
import { UserLandingPage } from "@/components/users/UserLandingPage";

const Home = () => {
  return (
    <div>
      <UserLandingPage />
      <LandingPage />
    </div>
  );
};

export default Home;
