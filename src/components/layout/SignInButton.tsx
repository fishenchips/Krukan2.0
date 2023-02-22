import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

export const SignInButton = () => {
  const { push, asPath } = useRouter();
  const toast = useToast();

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
    toast({
      title: "Successfully logged out.",
      description: "See you soon, Forza Krukan!",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <div onClick={handleSignIn}>
      <FontAwesomeIcon icon={faUser} />
      <span>Log in</span>
    </div>
  );
};
