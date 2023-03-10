import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

/* get by email, but want to redirect logged in user to /:id */
/* when they press the email I want them to be redirected to this page */
/* session vs api call */

const UserPage = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  /*   if (status === "unauthenticated") {
    push("/auth/signin");
  } */

  console.log(session);
  return <>Hello</>;
};

export default UserPage;
