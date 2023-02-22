import { NextPage } from "next";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import { useToast } from "@chakra-ui/react";

const SignInPage: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const toast = useToast();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (email === "") return false;

    signIn("email", { email, redirect: false });
    toast({
      title: "Log in request sent",
      description:
        "We have sent you an e-mail. Please follow the instructions in the e-mail to log in.",
      status: "info",
      duration: 9000,
    });
  };

  if (status === "loading") return <p>loading</p>;

  if (session) {
    push("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Log in" />
    </form>
  );
};

export default SignInPage;
