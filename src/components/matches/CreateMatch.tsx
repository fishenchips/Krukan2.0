import Link from "next/link";
import { NewMatchForm } from "./NewMatchForm";

export const NewMatch = () => {
  return (
    <>
      <Link href={"/admin"}>Matches</Link>
      <NewMatchForm />
    </>
  );
};
