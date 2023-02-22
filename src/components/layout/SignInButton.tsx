import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export const SignInButton = () => {
  const { push, asPath } = useRouter();

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };
  return (
    <div onClick={handleSignIn}>
      <FontAwesomeIcon icon={faUser} />
      <span>Log in</span>
    </div>
  );
};
