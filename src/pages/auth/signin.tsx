import { NextPage } from "next";

const SignInPage: NextPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default SignInPage;
