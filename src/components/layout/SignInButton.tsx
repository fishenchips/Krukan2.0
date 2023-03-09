import { GrLogin } from "react-icons/gr";
import { useRouter } from "next/router";
import styles from "./SignInForm.module.css";

export const SignInButton = () => {
  const { push, asPath } = useRouter();

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };
  return (
    <div onClick={handleSignIn}>
      <span>
        <GrLogin className={styles.icon} />
      </span>
      <span>Log in</span>
    </div>
  );
};
