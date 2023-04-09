import { Dispatch, SetStateAction, useRef } from "react";
import styled from "./index.module.css";
import { Button } from "@/components/match/AttendMatch";
import cookieCutter from "cookie-cutter";

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

    /* check for wrong password and create an animation */
  };

  return (
    <>
      <div>
        <label htmlFor="admin">Enter Password</label>
        <input id="admin" type="password" ref={passwordRef} />
        <Button onClick={handleCheckAdmin}>Enter</Button>
      </div>
    </>
  );
};
