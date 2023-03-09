import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { GrLogout } from "react-icons/gr";
import styles from "./SignInForm.module.css";

import { useToast } from "@chakra-ui/react";

export const SignOutButton = () => {
  const { push } = useRouter();
  const toast = useToast();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
    toast({
      title: "Successfully logged out.",
      description: "See you soon, Forza Krukan!",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <div onClick={handleSignOut}>
      <GrLogout className={styles.icon} />
      <span>Log out</span>
    </div>
  );
};
