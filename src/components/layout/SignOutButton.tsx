import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { useToast } from "@chakra-ui/react";

export const SignOutButton = () => {
  const { push } = useRouter();
  const toast = useToast();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/logged-out" });

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
      <FontAwesomeIcon icon={faDoorOpen} />
      <span>Log out</span>
    </div>
  );
};
