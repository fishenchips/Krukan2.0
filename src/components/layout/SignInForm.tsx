import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import { useToast } from "@chakra-ui/react";

import styles from "./SignInForm.module.css";

export const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const toast = useToast();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!email.includes("@") || email.trim() === "") {
      toast({
        title: "Please provide an e-mail address",
        status: "error",
        isClosable: true,
      });
    } else {
      signIn("email", { email, redirect: false });
      toast({
        title: "Log in request sent",
        description:
          "We have sent you an e-mail. Please follow the instructions in the e-mail to log in.",
        status: "info",
        duration: 9000,
      });
    }
  };

  if (status === "loading") return <p>loading</p>;

  if (session) {
    push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.email}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input className={styles.button} type="submit" value="Log in" />
      </div>
    </form>
  );
};
