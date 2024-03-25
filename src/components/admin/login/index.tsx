import { Dispatch, SetStateAction, SyntheticEvent, useRef } from "react";
import styled from "./index.module.css";
import cookieCutter from "cookie-cutter";
import { Button } from "@/components/layout/Button";

interface Props {
  setPassword: Dispatch<SetStateAction<string | undefined>>;
}

export const AdminLogin: React.FC<Props> = ({ setPassword }) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleCheckAdmin = () => {
    const enteredPassword = passwordRef.current?.value;

    if (enteredPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setPassword(enteredPassword);

      cookieCutter.set("isAdmin", "admin");
      return;
    }
  };

  const enterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCheckAdmin();
    }
  };

  return (
    <>
      <div>
        <label htmlFor="admin">Enter Password</label>
        <input
          id="admin"
          type="password"
          ref={passwordRef}
          onKeyDown={enterClick}
        />
        <Button handleClick={handleCheckAdmin} text="Enter" />
      </div>
    </>
  );
};
