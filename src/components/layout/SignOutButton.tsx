import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

export const SignOutButton = () => {
  const { push } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/logged-out" });

    push(data.url);
  };

  return (
    <div onClick={handleSignOut}>
      <FontAwesomeIcon icon={faDoorOpen} />
      <span>Log out</span>
    </div>
  );
};
